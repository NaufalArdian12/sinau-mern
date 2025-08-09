import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import PropTypes from "prop-types";



export default function LayoutDashboard({isAdmin = true}) {
  const ispreviewPage = useMatch("/manager/courses/:id/preview");

  return (
    <>
      {ispreviewPage ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar isAdmin={isAdmin} />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
LayoutDashboard.propTypes = {
  isAdmin: PropTypes.bool,
};