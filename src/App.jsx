// App.js
import WriteBlog from "./pages/WriteBlog";
import Blogs from "./pages/Blogs";
import AdminApprove from "./pages/AdminApprove";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./pages/Auth";
//console.log("Firebase connected:", auth.app.name);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import solvingProblem from "./assets/SolvingProblem.png";
import workingOnApp from "./assets/WorkingOnapplication.png";
import morningExercise from "./assets/MorningExercise.png";
import viralOnAkhuWatPages from "./assets/VIRALONAKHUWATPAGES.jpeg";
import withKpMinisterOfYafrs from "./assets/WITHKPMINISTEROFYAFRS.jpeg";
import speechCompetitionAward from "./assets/SPEECHCOMPETIONAWARD.jpeg";
import withCollegeFriends from "./assets/WITHCOLLEGEFRIENDS.jpeg";



export default function App() {
  const mediaItems = [
    { id: 1, type: "image", src: solvingProblem, title: "Web Development" },
    { id: 2, type: "image", src: workingOnApp, title: "React Projects" },
    { id: 3, type: "image", src: morningExercise, title: "Morning Routine" },
    { id: 4, type: "image", src: viralOnAkhuWatPages, title: "Viral on Akhuwat Pages" },
    { id: 5, type: "image", src: withKpMinisterOfYafrs, title: "With KP Minister of YAFRS" },
    { id: 6, type: "image", src: speechCompetitionAward, title: "Speech Competition Award" },
    { id: 7, type: "image", src: withCollegeFriends, title: "With College Friends" },
    
  ];

  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="w-full flex-1 px-0 pt-1 pb-0 sm:pt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/Auth" element={<Navigate to="/auth" replace />} />

              <Route path="/writeblog" element={<WriteBlog />} />
              <Route path="/WriteBlog" element={<Navigate to="/writeblog" replace />} />
              <Route path="/about" element={<About mediaItems={mediaItems} />} />
              <Route path="/About" element={<Navigate to="/about" replace />} />
              <Route path="/logo.png" element={<div className="text-xl">(Under Construction)</div>} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/Blogs" element={<Navigate to="/blogs" replace />} />
              <Route path="/adminapprove" element={<AdminApprove />} />
              <Route path="/AdminApprove" element={<Navigate to="/adminapprove" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
