import mongoose from "mongoose";
import userModel from "./userModel.js";
import courseDetailModel from "./courseDetailModel.js";
import categoryModel from "./categoryModel.js";

const courseModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    details: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courseDetail",
      },
    ],
  },
  {
    timestamps: true,
  }
);

courseModel.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await categoryModel.findByIdAndUpdate(
      doc.category,
      { $pull: { courses: doc._id } },
      { new: true }
    );
    await courseDetailModel.deleteMany({ course: doc._id });

    doc.students?.map(async (std) => {
      await userModel.updateMany(std._id, { $pull: { courses: doc._id } });
    });
  }
});
export default mongoose.model("Course", courseModel);
