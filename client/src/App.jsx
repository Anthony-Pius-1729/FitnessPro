import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import FitnessDashboard from "./Components/Dashboard";
import AIChat from "./Components/AIChat";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/welcome-user" element={<LandingPage />} />
        <Route path="/Dashboard" element={<FitnessDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AI" element={<AIChat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
