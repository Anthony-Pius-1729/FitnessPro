import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Bell,
  Search,
  Dumbbell,
  Target,
  Calendar,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/logo-main.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Programme", icon: Target },
    { name: "Dashboard", icon: TrendingUp },
    { name: "AI FitBuddy", icon: Dumbbell },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-sm">
        <div className="flex justify-between items-center font-medium px-8 lg:px-12 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={logo}
                className="w-12 h-12 bg-emerald-100 rounded-xl p-2 shadow-sm"
                alt="FitnessPro Logo"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-slate-800 font-bold text-xl">
                Fitness<span className="text-emerald-600">Pro</span>
              </h1>
              <p className="text-xs text-slate-500 -mt-1">
                Your Fitness Journey
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-200"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-200">
              <Search className="w-4 h-4" />
            </button>

            {/* Notifications */}
            <button className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-200">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full text-xs"></span>
            </button>

            {/* Login/Profile Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveNav(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                );
              })}

              {/* Mobile Search */}
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-all duration-300">
                <Search className="w-5 h-5" />
                Search
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
