import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Dumbbell,
  Utensils,
  Target,
  TrendingUp,
  Star,
  Check,
  ArrowRight,
  Download,
  Calendar,
  Clock,
  Users,
  Award,
  Heart,
  Zap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import vid from "../assets/vid2.mp4";
import TestimonialsAndFAQ from "./FaqTestimonial";
import FitnessDashboard from "./Dashboard";

const HomePage = () => {
  const Services = [
    {
      heading: "Personal Training Programs",
      text: "Customized workout plans designed for your fitness level and goals.",
      image:
        "https://plus.unsplash.com/premium_photo-1663040472837-4d2051b93735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      heading: "Strength & Conditioning",
      text: "Build muscle and improve your overall strength with expert guidance.",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      heading: "Group Fitness Classes",
      text: "Join energizing group workouts that keep you motivated and engaged.",
      image:
        "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      heading: "Nutrition Planning",
      text: "Personalized meal plans to fuel your fitness journey effectively.",
      image:
        "https://images.unsplash.com/photo-1668665771959-b217076ddde3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWwlMjBwbGFufGVufDB8fDB8fHww",
    },
    {
      heading: "Meal Prep Services",
      text: "Fresh, healthy meals prepared and delivered to support your goals.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lYWwlMjBwbGFufGVufDB8fDB8fHww",
    },
    {
      heading: "Wellness Coaching",
      text: "Holistic approach to health including lifestyle and mindset coaching.",
      image:
        "https://images.unsplash.com/photo-1668665771757-4d42737d295a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhbCUyMHBsYW58ZW58MHx8MHx8fDA%3D",
    },
  ];

  const Plans = [
    {
      heading: "Basic Membership",
      text: "Perfect for beginners starting their fitness journey with essential features.",
      price: 490,
      offers: [
        "Gym Access",
        "Basic Workout Plans",
        "Nutrition Guidelines",
        "Community Support",
      ],
    },
    {
      heading: "Premium Membership",
      text: "Most popular choice with comprehensive fitness and nutrition support.",
      price: 990,
      offers: [
        "All Basic Features",
        "Personal Training Sessions",
        "Custom Meal Plans",
        "Progress Tracking",
        "24/7 Support",
      ],
    },
    {
      heading: "Elite Membership",
      text: "Complete transformation package with personalized coaching and premium services.",
      price: 1490,
      offers: [
        "All Premium Features",
        "1-on-1 Coaching",
        "Meal Prep Service",
        "Supplement Guidance",
        "VIP Access",
      ],
    },
  ];

  return (
    <>
      <div className="relative font-[Poppins] bg-slate-50">
        <video src={vid} loop autoPlay muted />
        <div className="absolute top-28 left-16 w-[35rem] h-[30rem] bg-white/90 backdrop-blur-sm drop-shadow-2xl rounded-2xl border border-emerald-100 p-10 max-h-full">
          <div className="relative">
            <i className="fa-solid fa-bolt absolute text-5xl text-emerald-500 -top-16 -right-14 animate-bounce"></i>
            <h1 className="text-slate-800 font-extrabold text-4xl mb-2.5 leading-tight">
              JOIN US TODAY TO REACH YOUR
              <span className="text-emerald-600"> HEALTH GOALS</span>
            </h1>
            <p className="text-slate-600 font-medium font-[Raleway] my-6 leading-relaxed">
              Transform your life with our comprehensive fitness and nutrition
              programs. Whether you're just starting out or looking to take your
              fitness to the next level, our expert team is here to guide you
              every step of the way. Join thousands of members who have already
              achieved their dream physique and optimal health.
            </p>
            <div className="flex justify-between gap-x-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                JOIN US
              </Button>
              <Button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Go Premium
              </Button>
            </div>
            <i className="fa-solid fa-heart-circle-check text-5xl text-rose-500 absolute -bottom-20 -left-16 animate-pulse"></i>
          </div>
        </div>

        <div className="px-10 items-center flex flex-col justify-center bg-white">
          <h1 className="p-16 text-center text-5xl font-[Raleway] font-bold text-slate-800">
            WHAT WE <span className="text-emerald-600">OFFER</span>
          </h1>
          <div className="grid grid-cols-3 gap-12 pb-16">
            {Services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="relative col-span-1 rounded-2xl shadow-xl transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:shadow-2xl group overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt=""
                    className="w-[25rem] h-[25rem] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 text-white font-semibold px-6">
                    <h1 className="text-xl font-bold mb-2">
                      {service.heading}
                    </h1>
                    <p className="text-slate-200 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-10 items-center flex flex-col justify-center py-16 bg-slate-50">
          <Button className="px-12 py-8 text-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            EXPLORE NOW
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <div className="px-10 items-center flex flex-col justify-center mx-auto py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <h3 className="mb-4 text-emerald-400 font-semibold text-lg">
            Upgrade Your Experience
          </h3>
          <h1 className="text-5xl my-8 font-bold text-center">
            CHOOSE THE <span className="text-emerald-400">RIGHT PLAN</span> FOR
            YOU
          </h1>
          <div className="flex justify-center mt-12">
            <div className="flex justify-between gap-8 w-fit">
              {Plans.map((plan, idx) => {
                const isPopular = idx === 1;
                return (
                  <div
                    key={idx}
                    className={`bg-white/10 backdrop-blur-md border-2 relative hover:border-emerald-400 transition-all duration-300 ease-out p-8 rounded-2xl h-[32rem] transform hover:scale-105 ${
                      isPopular
                        ? "w-[26rem] scale-110 z-10 border-emerald-400 bg-white/15"
                        : "w-[23rem] border-slate-600"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <i
                      className={`fa-solid fa-circle-check absolute top-6 right-6 text-3xl ${
                        isPopular ? "text-emerald-400" : "text-slate-400"
                      }`}
                    ></i>
                    <h1 className="my-3 text-2xl font-bold">{plan.heading}</h1>
                    <p className="py-4 text-slate-300 leading-relaxed">
                      {plan.text}
                    </p>
                    <p className="py-4 text-3xl font-bold">
                      <span className="text-emerald-400">{plan.price} TL</span>
                      <span className="text-base text-slate-400 font-normal">
                        /month
                      </span>
                    </p>
                    <h1 className="text-xl font-semibold mb-4">What You Get</h1>
                    <div className="py-2 space-y-3">
                      {plan.offers.map((offer, offerIdx) => {
                        return (
                          <div
                            key={offerIdx}
                            className="flex justify-start items-center gap-x-3"
                          >
                            <i className="fa-solid text-emerald-400 fa-circle-check text-sm"></i>
                            <p className="text-slate-200">{offer}</p>
                          </div>
                        );
                      })}
                    </div>
                    <Button
                      className={`w-full text-lg font-bold py-6 mt-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        isPopular
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                          : "bg-white text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <TestimonialsAndFAQ />
        {/* <FitnessDashboard /> */}
      </div>
    </>
  );
};

export default HomePage;
