import courseModel from "../models/courseModel.js";
import fs from "fs/promises"; 
import { mutateCourseSchema } from "../utils/schema.js";
import categoryModel from "../models/categoryModel.js";
import userModel from "../models/userModel.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(process.cwd(), "public", "uploads", "courses");

async function safeUnlink(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    // Abaikan jika file sudah tidak ada
    if (err?.code !== "ENOENT") console.error("Failed to unlink:", err);
  }
}

export const getCourses = async (req, res) => {
  try {
    const courses = await courseModel
      .find({
        manager: req.user._id,
      })
      .select("name thumbnail")
      .populate({
        path: "category",
        select: "name -_id",
      })
      .populate({
        path: "students",
        select: "name",
      });

    const imageUrl = process.env.APP_URL + "/uploads/courses/";

    const response = courses.map((item) => {
      return {
        ...item.toObject(),
        thumbnail_url: imageUrl + item.thumbnail,
        students_count: item.students.length,
      };
    });
    res.json({
      message: "Get courses successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const postCourse = async (req, res) => {
  try {
    const body = req.body;

    const parse = mutateCourseSchema.safeParse(body);

    if (!parse.success) {
      const errorMessages = parse.error.issues.map((err) => err.message);

      if (req?.file?.path && fs.existsSync(req?.file?.path)) {
        fs.unlinkSync(req?.file?.path);
      }
      return res.status(400).json({ error: errorMessages });
    }

    const category = await categoryModel.findById(parse.data.categoryId);
    if (!category) {
      return res.status(400).json({ error: "Category not found" });
    }

    const course = new courseModel({
      name: parse.data.name,
      category: category._id,
      tagline: parse.data.tagline,
      description: parse.data.description,
      thumbnail: req.file?.filename,
      manager: req.user._id,
    });

    await course.save();

    await categoryModel.findByIdAndUpdate(
      category._id,
      {
        $push: { courses: course._id },
      },
      { new: true }
    );

    await userModel.findByIdAndUpdate(
      req.user._id,
      {
        $push: { courses: course._id },
      },
      { new: true }
    );

    return res.json({ message: "Create course successfully", data: course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateCourse = async (req, res) => {
  const uploadedPath = req?.file?.path; // simpan dulu untuk cleanup jika error
  try {
    const body = req.body;
    const courseId = req.params.id;

    // 1) Validasi
    const parse = mutateCourseSchema.safeParse(body);
    if (!parse.success) {
      const errorMessages = parse.error.issues.map((err) => err.message);
      if (uploadedPath) await safeUnlink(uploadedPath); // cleanup file baru
      return res.status(400).json({ error: errorMessages });
    }

    // 2) Cek entity terkait
    const [category, oldCourse] = await Promise.all([
      categoryModel.findById(parse.data.categoryId),
      courseModel.findById(courseId),
    ]);

    if (!oldCourse) {
      if (uploadedPath) await safeUnlink(uploadedPath);
      return res.status(404).json({ error: "Course not found" });
    }
    if (!category) {
      if (uploadedPath) await safeUnlink(uploadedPath);
      return res.status(400).json({ error: "Category not found" });
    }

    // 3) Siapkan nama thumbnail baru vs lama
    const oldThumb = oldCourse.thumbnail;
    const newThumb = req?.file?.filename ? req.file.filename : oldThumb;

    // 4) Update DB dulu (agar konsisten)
    await courseModel.findByIdAndUpdate(
      courseId,
      {
        name: parse.data.name,
        category: category._id,
        tagline: parse.data.tagline,
        description: parse.data.description,
        thumbnail: newThumb,
        manager: req.user._id,
      },
      { new: true }
    );

    // 5) Jika ada file baru dan nama berbeda, hapus file lama
    if (req?.file && oldThumb && oldThumb !== newThumb) {
      const oldPath = path.join(uploadsDir, oldThumb);
      await safeUnlink(oldPath);
    }

    return res.json({ message: "update course successfully" });
  } catch (error) {
    console.log(error);
    // Jika terjadi error setelah upload, hapus file baru agar tidak orphan
    if (req?.file?.path) await safeUnlink(req.file.path);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await courseModel.findById(courseId);

    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "public/uploads/courses",
      course.thumbnail
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await courseModel.findByIdAndDelete(courseId);

    return res.json({ message: "Delete course successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
