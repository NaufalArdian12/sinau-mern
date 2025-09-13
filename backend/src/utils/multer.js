import multer from "multer";

export const fileStorageCourse = multer.diskStorage({
  destination: (req, file, cb) => {
    cb("public/uploads/courses");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split(".")[1];
    const uniqeId = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqeId}.${ext}`);
  }
});

export const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};