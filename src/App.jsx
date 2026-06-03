import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Imports your navbar
import Footer from "./components/Footer";
import Home from "./pages/Home";       // Example page components
//import About from "./pages/About";
//import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
    <Router>
      {/* The Navbar stays on top of all pages */}
      <Navbar /> 

      {/* The content below changes based on the URL */}
      <main className="w-full px-3 pt-3 pb-0 sm:px-4 sm:pt-4">
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/contact" element={<div className="text-xl">Contact Page (Under Construction)</div>}/>
          <Route path="/About" element={<div className="text-xl">About Page (Under Construction)</div>}/>
          <Route path="/logo.png" element={<div className="text-xl"> (Under Construction)</div>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
    </>

  );
}
