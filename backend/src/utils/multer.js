import multer from "multer";
import path from "path";
import mime from "mime-types";

export const fileStorageCourse = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/courses");
  },
  filename: (req, file, cb) => {
    // Ambil ekstensi dari originalname
    let ext = path.extname(file.originalname);

    // Kalau nggak ada, fallback dari mimetype
    if (!ext) {
      const fromMime = mime.extension(file.mimetype); // contoh: image/png -> png
      if (fromMime) ext = `.${fromMime}`;
    }

    // Fallback terakhir kalau nggak ada juga
    if (!ext) ext = ".bin";

    const uniqueId = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueId}${ext}`);
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
