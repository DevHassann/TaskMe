import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Sidebar from "./side-bar";
import Navbar from "./navigation-bar";
import MobileSidebar from "./mobile-sidebar";

export function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className="flex-1 md:overflow-y-auto">
        <Navbar />

        <div className="p-4 2xl:px-10 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}
