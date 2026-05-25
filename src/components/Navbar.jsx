import { NavLink } from "react-router-dom";
import { Search } from "lucide-react"; // Imported the clean icon component
import  {Link} from  "react-router-dom"
import logo from "../assets/logo.png" 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white h-12 p-2 m-2">
      {/* Left side links and Search Bar */}
      <div className="flex items-center flex-nowrap overflow-hidden gap-2">
         <Link 
           to="/"
         >
           <img  src={logo} className="h-8 w-auto object-contain px-1 py-1"/>
         </Link>

         {/* Search Bar Container */}
         <div className="flex items-center rounded overflow-hidden border-2 border-transparent focus-within:border-[#F3A847]">
           {/* Clean, human-readable search icon component */}
           <div className="bg-[#F3A847] text-gray-900 h-8 w-10 flex items-center justify-center">
             <Search className="w-4 h-4" />
           </div>
           
           {/* Input Field */}
           <input 
             type="text" 
             placeholder="Search..." 
             className="bg-white cursor-pointer text-gray-900 placeholder-gray-500 text-sm px-3 py-1 h-8 w-48 focus:outline-none"
           />
         </div>
      </div>
      
      {/* Right side links */}
      <div className="flex items-center flex-nowrap overflow-hidden gap-2">
         <NavLink 
           to="/" 
           className={({ isActive }) => 
             `px-10 pr-10 py-1 rounded  w-30  text-white ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           Home
         </NavLink>
      
      
         <NavLink 
           to="/contact" 
           className={({ isActive }) => 
             `px-10 pr-10 py-1 rounded  w-30 rounded text-white ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           Contact
         </NavLink>
         <NavLink 
           to="/About" 
           className={({ isActive }) => 
             `px-10 pr-10 py-1 rounded  w-30 rounded text-white ${isActive ? 'bg-green-600' : 'bg-green-700'}`
           }
         >
           About
         </NavLink>
      </div>
    </nav>
  );
}
