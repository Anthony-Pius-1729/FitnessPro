import React, { useState } from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import FitnessDashboard from "./Components/Dashboard";
import AIChat from "./Components/AIChat";
import Programme from "./Components/Programme";
import SignUp from "./Components/SignUp";
import Exercise from "./Components/Exercise";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import FitnessDataForm from "./Components/FitnessDataForm";
import Checkout from "./Components/Checkout";
import AuthContext from "../Contexts/AuthContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserSession = () => {
    console.log("Auth context has been accessed ");
    setLoggedIn(!loggedIn);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleUserSession }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/welcome-user" element={<LandingPage />} />
            <Route path="/Dashboard" element={<FitnessDashboard />} />
            <Route path="/Programme" element={<Programme />} />
            <Route path="/AI" element={<AIChat />} />
            <Route path="/exercises/:id" element={<Exercise />} />
          </Route>

          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/fitness-data" element={<FitnessDataForm />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
