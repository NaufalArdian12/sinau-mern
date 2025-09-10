import mongoose from "mongoose";

const courseDetailModel = new mongoose.Schema(
  {
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["video", "text"],
      default: "video",
    },
    videoId: String,
    text: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("CourseDetail", courseDetailModel);
