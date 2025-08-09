import { createBrowserRouter } from "react-router-dom";
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
import StudentPage from "../pages/student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
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
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManageCoursePage />,
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCoursePage />,
      },
      {
        path: "/manager/courses/:id",
        element: <ManagerCourseDetailPage />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentPage />,
      },
      {
        path: "/manager/courses/:id/preview",
        element: <ManageCoursePreviewPage />,
      },
      {
        path: "/manager/students",
        element: <ManageStudentsPage />,
      },
    ],
  },
  {
    path: "/student",
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        element: <StudentPage />, // Placeholder for student home page
      },
      {
        path: "/student/courses",
        element: <div>Student Courses Page</div>, // Placeholder for student courses page
      },
    ],
  },
]);

export default router;
