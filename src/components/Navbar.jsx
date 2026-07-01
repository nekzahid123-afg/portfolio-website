import { NavLink } from "react-router-dom";
import { Search } from "lucide-react"; // Imported the clean icon component
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContextValue";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navLinkClass = ({ isActive }) =>
    `min-h-9 whitespace-nowrap rounded px-2 py-2 text-center text-xs leading-tight text-white sm:min-h-11 sm:px-4 sm:text-base lg:px-5 font-medium hover:bg-green-500 transition ${
      isActive ? "bg-green-600 border-2 border-green-400" : "bg-green-700"
    }`;

  return (
    <nav className="m-2 flex min-h-16 flex-col sm:flex-row items-center justify-between gap-2 bg-gray-800 p-2 text-white sm:p-3">
      {/* Top row: Logo and Search */}
      <div className="flex w-full sm:w-auto items-center gap-2">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            className="h-8 w-auto object-contain px-1 py-1 sm:h-10"
          />
        </Link>

        {/* Search Bar Container */}
        <div className="flex flex-1 sm:flex-none items-center overflow-hidden rounded border-2 border-transparent focus-within:border-[#F3A847]">
          {/* Clean, human-readable search icon component */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#F3A847] text-gray-900 sm:h-10 sm:w-11">
            <Search className="w-4 h-4" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search..."
            className="h-9 min-w-0 flex-1 cursor-pointer bg-white px-2 py-1 text-xs text-gray-900 placeholder-gray-500 focus:outline-none sm:h-10 sm:w-48 sm:px-3 sm:text-sm"
          />
        </div>
      </div>

      {/* Bottom row or right row: Navigation links */}
      <div className="flex w-full sm:w-auto min-w-0 flex-1 flex-wrap items-center justify-start sm:justify-end gap-1 overflow-x-auto sm:gap-2">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/writeblog" className={navLinkClass}>
          Blog
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/blogs" className={navLinkClass}>
          Posts
        </NavLink>
        <NavLink to="/adminapprove" className={navLinkClass}>
          Admin
        </NavLink>
        {currentUser ? (
          <button
            onClick={logout}
            className="min-h-9 whitespace-nowrap rounded px-2 py-2 text-center text-xs leading-tight text-white sm:min-h-11 sm:px-4 sm:text-base lg:px-5 font-medium bg-green-700 hover:bg-green-500 active:bg-green-800 transition border-2 border-transparent hover:border-green-400"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/auth" className={navLinkClass}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
