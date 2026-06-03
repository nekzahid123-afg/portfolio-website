import { NavLink } from "react-router-dom";
import { Search } from "lucide-react"; // Imported the clean icon component
import  {Link} from  "react-router-dom"
import logo from "../assets/logo.png" 

export default function Navbar() {
  return (
    <nav className="m-2 flex flex-col gap-3 bg-gray-800 p-2 text-white sm:flex-row sm:items-center sm:justify-between">
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
      <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
         <NavLink 
           to="/" 
           className={({ isActive }) => 
             `rounded px-3 py-1 text-center text-sm text-white sm:w-30 sm:px-8 sm:text-base ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           Home
         </NavLink>
      
      
         <NavLink 
           to="/contact" 
           className={({ isActive }) => 
             `rounded px-3 py-1 text-center text-sm text-white sm:w-30 sm:px-8 sm:text-base ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           Contact
         </NavLink>
         <NavLink 
           to="/About" 
           className={({ isActive }) => 
             `rounded px-3 py-1 text-center text-sm text-white sm:w-30 sm:px-8 sm:text-base ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           About
         </NavLink>
      </div>
    </nav>
  );
}
