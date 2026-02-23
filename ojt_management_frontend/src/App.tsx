import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentOpportunities from "./pages/student/StudentOpportunities";
import StudentApplications from "./pages/student/StudentApplications";
import StudentEvaluations from "./pages/student/StudentEvaluations";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentCertificates from "./pages/student/StudentCertificates";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         <Route path="/student/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
       <Route path="/student/opportunities" element={<StudentOpportunities />} />
       <Route path="/student/applications" element={<StudentApplications />} />
      <Route path="/student/evaluations" element={<StudentEvaluations />} />
       <Route path="/student/attendance" element={<StudentAttendance />} />
       <Route path="/student/certificates" element={<StudentCertificates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
