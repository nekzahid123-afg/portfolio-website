import { NavLink } from "react-router-dom";
import { Search } from "lucide-react"; // Imported the clean icon component
import  {Link} from  "react-router-dom"
import logo from "../assets/logo.png" 
import { useAuth } from "../context/AuthContextValue";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navLinkClass = ({ isActive }) =>
    `min-h-9 whitespace-nowrap rounded px-2 py-2 text-center text-xs leading-tight text-white sm:min-h-11 sm:px-4 sm:text-base lg:px-5 ${
      isActive ? "bg-green-600" : "bg-green-700"
    }`;

  return (
    <nav className="m-2 flex min-h-16 flex-row items-center justify-between gap-2 bg-gray-800 p-2 text-white sm:p-3">
      {/* Left side links and Search Bar */}
      <div className="flex w-[34%] min-w-0 shrink-0 items-center gap-2 sm:w-auto sm:flex-1">
         <Link 
           to="/"
           className="shrink-0"
         >
           <img  src={logo} className="h-8 w-auto object-contain px-1 py-1 sm:h-10"/>
         </Link>

         {/* Search Bar Container */}
         <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded border-2 border-transparent focus-within:border-[#F3A847] sm:flex-none">
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
      
      {/* Right side links */}
      <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-1 overflow-hidden sm:gap-2">
         <NavLink 
           to="/" 
           className={navLinkClass}
         >
           Home
         </NavLink>
      
      
         <NavLink 
           to="/writeblog" 
           className={navLinkClass}
         >
         WriteBlog
         </NavLink>
         <NavLink 
           to="/about" 
           className={navLinkClass}
         >
           About
         </NavLink>
         <NavLink 
           to="/blogs" 
           className={navLinkClass}
         >
          Blogs 
         </NavLink>
         <NavLink 
           to="/adminapprove" 
           className={navLinkClass}
         >
           AdminApprove
         </NavLink>
          {currentUser ? (
            <button
              onClick={logout}
              className="min-h-9 whitespace-nowrap rounded bg-green-700 px-2 py-2 text-center text-xs leading-tight text-white sm:min-h-11 sm:px-4 sm:text-base lg:px-5"
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
