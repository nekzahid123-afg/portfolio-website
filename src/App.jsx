import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Imports your navbar
//import Home from "./pages/Home";       // Example page components
//import About from "./pages/About";
//import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* The Navbar stays on top of all pages */}
      <Navbar /> 

      {/* The content below changes based on the URL */}
      <div className="p-4 flex">
        <Routes>
         <Route path="/" element={<div className="text-xl">Home Page (Under Construction)</div>} />
          <Route path="/contact" element={<div className="text-xl">Contact Page (Under Construction)</div>}/>
          <Route path="/About" element={<div className="text-xl">About Page (Under Construction)</div>}/>
          <Route path="/logo.png" element={<div className="text-xl"> (Under Construction)</div>}/>
        </Routes>
      </div>
    </Router>
  );
}
