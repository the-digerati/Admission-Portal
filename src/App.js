import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Admission from "./Pages/Admission";
import Quiz from "./Pages/Quiz";
import Fees from "./Pages/Fees";
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routing Path to different Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply" element={<Admission />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pay-fees" element={<Fees />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
