
# sinau-mern

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![MERN Stack](https://img.shields.io/badge/stack-MERN-blueviolet)
![TailwindCSS](https://img.shields.io/badge/style-TailwindCSS-38B2AC)

> A **Learning Management System (LMS)** built using the **MERN Stack** with role-based access for **Managers** and **Students**, featuring lesson management, file uploads, and responsive UI.

---

## 🎯 Purpose & Users

**sinau-mern** aims to simplify digital learning with:  
- **Managers**: Full control over lessons and content.  
- **Students**: Easy access to learning materials anytime, anywhere.  

---

## 🚀 Features

- **Lesson Management (CRUD)**: Add, edit, delete, and view lessons.  
- **File Upload**: Attach PDFs, images, or other learning materials.  
- **Role-Based Access**:
  - **Manager**: Manage all content.  
  - **Student**: Access materials (coming soon).  
- **Responsive UI**: Optimized with **TailwindCSS** for all devices.  

---

## 🛠 Tech Stack

| Technology      | Usage                  |
|-----------------|------------------------|
| **React.js**     | Frontend framework      |
| **Node.js**      | Backend runtime         |
| **Express.js**   | Backend framework       |
| **MongoDB**      | Database                |
| **TailwindCSS**  | Styling & responsiveness|
| **JWT**          | Authentication          |
| **Multer**       | File upload handling     |

---

## 📸 Screenshots / Demo

| Dashboard (Manager)            | Lesson List (Student)           |
|--------------------------------|---------------------------------|
| *Add screenshot here*           | *Add screenshot here*            |

---

## ⚙️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/NaufalArdian12/sinau-mern.git
   cd sinau-mern
   ```

2. **Install dependencies**  
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set environment variables** in `backend/.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/sinau-mern
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the backend**  
   ```bash
   cd backend
   npm run dev
   ```

5. **Run the frontend**  
   ```bash
   cd frontend
   npm start
   ```

---

## 🗂 API Endpoints

| Method | Endpoint          | Description            |
|--------|------------------|-------------------------|
| GET    | `/api/lessons`     | Retrieve all lessons     |
| POST   | `/api/lessons`     | Add a new lesson         |
| PUT    | `/api/lessons/:id` | Update a lesson          |
| DELETE | `/api/lessons/:id` | Delete a lesson          |

---

## 📅 Roadmap

- [ ] Student role access  
- [ ] Authentication & Authorization (Login/Register)  
- [ ] Discussion & comments feature  
- [ ] Deployment on Vercel/Render/DigitalOcean  

---

## 🤝 Contributing

Contributions are always welcome!  

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push the branch: `git push origin feature-name`  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  

---

## 📬 Contact

- **Author**: Naufal Ardian  
- **Email**: *(your email here)*  
- **LinkedIn**: *(your LinkedIn here)*  
