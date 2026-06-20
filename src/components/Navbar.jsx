import { NavLink } from "react-router-dom";
import { Search } from "lucide-react"; // Imported the clean icon component
import  {Link} from  "react-router-dom"
import logo from "../assets/logo.png" 
import { useAuth } from "../context/AuthContextValue";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navLinkClass = ({ isActive }) =>
    `rounded px-3 py-2 text-center text-sm leading-tight text-white sm:px-4 lg:px-5 ${
      isActive ? "bg-green-600" : "bg-green-700"
    }`;

  return (
    <nav className="m-2 flex flex-col gap-3 bg-gray-800 p-2 text-white lg:flex-row lg:items-center lg:justify-between">
      {/* Left side links and Search Bar */}
      <div className="flex min-w-0 items-center gap-2">
         <Link 
           to="/"
           className="shrink-0"
         >
           <img  src={logo} className="h-8 w-auto object-contain px-1 py-1"/>
         </Link>

         {/* Search Bar Container */}
         <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded border-2 border-transparent focus-within:border-[#F3A847] sm:flex-none">
           {/* Clean, human-readable search icon component */}
           <div className="flex h-8 w-10 shrink-0 items-center justify-center bg-[#F3A847] text-gray-900">
             <Search className="w-4 h-4" />
           </div>
           
           {/* Input Field */}
           <input 
             type="text" 
             placeholder="Search..." 
             className="h-8 min-w-0 flex-1 cursor-pointer bg-white px-3 py-1 text-sm text-gray-900 placeholder-gray-500 focus:outline-none sm:w-48"
           />
         </div>
      </div>
      
      {/* Right side links */}
      <div className="flex flex-wrap items-center gap-2">
         <NavLink 
           to="/" 
           className={navLinkClass}
         >
           Home
         </NavLink>
      
      
         <NavLink 
           to="/WriteBlog" 
           className={navLinkClass}
         >
         WriteBlog
         </NavLink>
         <NavLink 
           to="/About" 
           className={navLinkClass}
         >
           About
         </NavLink>
         <NavLink 
           to="/Blogs" 
           className={navLinkClass}
         >
          Blogs 
         </NavLink>
         <NavLink 
           to="/AdminApprove" 
           className={navLinkClass}
         >
           AdminApprove
         </NavLink>
          {currentUser ? (
            <button
              onClick={logout}
              className="rounded bg-green-700 px-3 py-2 text-center text-sm leading-tight text-white sm:px-4 lg:px-5"
            >
              Logout
            </button>
          ) : (
            <NavLink 
              to="/auth" 
              className={navLinkClass}
            >
              Login
            </NavLink>
          )}
      </div>
    </nav>
  );
}
