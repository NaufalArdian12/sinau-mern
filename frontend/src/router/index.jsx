import { createBrowserRouter, redirect } from "react-router-dom";
import ManagerHomePage from "../pages/Manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/Manager/courses";
import ManageCreateCoursePage from "../pages/Manager/create-courses";
import ManagerCourseDetailPage from "../pages/Manager/course-detail";
import ManageContentPage from "../pages/Manager/course-content-create";
import ManageCoursePreviewPage from "../pages/Manager/course-preview";
import ManageStudentsPage from "../pages/Manager/students";
import StudentPage from "../pages/student/StudentOverview";
import secureLocalStorage from "react-secure-storage";
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const.js";
import { getCourses } from "../services/courseService.js";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/manager"),
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    id: MANAGER_SESSION,
    loader: async () => {
      const raw = secureLocalStorage.getItem(STORAGE_KEY);
      let session = null;
      try {
        session = raw ? JSON.parse(raw) : null;
      } catch {
        session = null;
      }

      if (!session || session.role !== 'manager') {
        return redirect("/manager/sign-in");
      }
      return session;
    },
    element: <LayoutDashboard />,
    children: [
      { index: true, element: <ManagerHomePage /> },
      {
        path: "courses",
        loader: async () => {
          const data = await getCourses();

          console.log("data", data);

          return data;

        }, element: <ManageCoursePage />
      },
      { path: "courses/create", element: <ManageCreateCoursePage /> },
      { path: "courses/:id", element: <ManagerCourseDetailPage /> },
      { path: "courses/:id/create", element: <ManageContentPage /> },
      { path: "courses/:id/preview", element: <ManageCoursePreviewPage /> },
      { path: "students", element: <ManageStudentsPage /> },
    ],
  },
  {
    path: "/student",
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      { index: true, element: <StudentPage /> },
      { path: "detail-course/:id", element: <ManageCoursePreviewPage /> },
    ],
  },
]);

export default router;
