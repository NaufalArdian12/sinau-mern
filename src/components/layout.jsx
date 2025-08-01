import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Courses from "../pages/ManagerHome/latest-courses";
import Students from "../pages/ManagerHome/latest-students";
import Stats from "./stats";

export default function LayoutDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header />
        <header className="flex items-center justify-between gap-[30px]">
          <div>
            <h1 className="font-extrabold text-[28px] leading-[42px]">
              Overview
            </h1>
            <p className="text-[#838C9D] mt-[1]">Grow your company quickly</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="#"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
              Customize
            </Link>
            <Link
              to=""
              className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
              Export Data
            </Link>
          </div>
        </header>
        <Stats />
        <div className="grid grid-cols-2 gap-[30px]">
          <Courses />
          <Students />
        </div>
      </main>
    </div>
  );
}
