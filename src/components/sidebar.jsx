import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./sidebar-item"; // pastikan path-nya benar

export default function Sidebar() {
  return (
    <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
      <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
        <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
          <Link to="index.html">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </Link>

          <ul className="flex flex-col gap-4">
            <p className="font-semibold text-xs leading-[18px] text-white">
              GENERAL
            </p>

            <SidebarItem
              to="/manager"
              icon="/assets/images/icons/3dcube-white.svg"
              label="Overview"
              exact // hanya untuk route root
            />

            <SidebarItem
              to="/manager/courses"
              icon="/assets/images/icons/note-favorite-white.svg"
              label="Courses"
            />

            <SidebarItem
              to="/manager/categories"
              icon="/assets/images/icons/crown-white.svg"
              label="Categories"
            />

            <SidebarItem
              to="/manager/students"
              icon="/assets/images/icons/profile-2user-white.svg"
              label="Students"
            />
          </ul>

          <ul className="flex flex-col gap-4">
            <p className="font-semibold text-xs leading-[18px] text-white">
              OTHERS
            </p>

            <SidebarItem
              to="/manager/subscription"
              icon="/assets/images/icons/security-card-white.svg"
              label="Subscription"
            />

            <SidebarItem
              to="/manager/rewards"
              icon="/assets/images/icons/cup-white.svg"
              label="Rewards"
            />

            <SidebarItem
              to="/manager/settings"
              icon="/assets/images/icons/setting-2-white.svg"
              label="Settings"
            />
          </ul>
        </nav>
      </div>

      <img
        src="/assets/images/backgrounds/sidebar-glow.png"
        className="absolute object-contain object-bottom bottom-0"
        alt="background"
      />
    </aside>
  );
}
