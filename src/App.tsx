import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import SignUpFace from "./pages/SignUpFace";
import SignUpPin from "./pages/SignUpPin";
import LoginBack from "./pages/LoginBack";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/sign-up-face" element={<SignUpFace />} />
      <Route path="/sign-up-pin" element={<SignUpPin />} />
      <Route path="/login-back" element={<LoginBack />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
