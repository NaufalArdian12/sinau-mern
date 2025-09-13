import express from "express";
import { getCourses } from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { fileFilter } from "../utils/multer.js";
import multer from "multer";
import { fileStorageCourse } from "../utils/multer.js";
import { postCourse } from "../controllers/courseController.js";

const courseRoutes = express.Router();

const upload = multer({
  storage: fileStorageCourse,
  fileFilter: fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.post("/courses", verifyToken, upload.single("thumbnail"), postCourse);

export default courseRoutes;
