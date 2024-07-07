import clsx from "clsx";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { MdSettings } from "react-icons/md";
import Logo from "../../../public/logos/logo.svg";

import { setOpenSidebar } from "../../redux/slices/auth-slice";

import { NavigationLinkData } from "../../static/sidebar-navigation-links-data";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = user?.isAdmin
    ? NavigationLinkData
    : NavigationLinkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-neutral-100" : ""
        )}
      >
        {el.icon}
        <span className="hover:text-[#2564ed]">{el.label}</span>
      </Link>
    );
  };

  NavLink.propTypes = {
    el: PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.node,
      label: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="w-full  h-full flex flex-col gap-6 p-5 max-md:pt-[40px] max-md:h-[100vh]">
      <h1 className="flex items-center">
        <img src={Logo} alt="TaskMe" className="w-[60px] h-[60px]" />
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div className="">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
