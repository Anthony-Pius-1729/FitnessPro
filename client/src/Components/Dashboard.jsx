import React, { Fragment, useState } from "react";
import {
  Calendar,
  TrendingUp,
  Target,
  Clock,
  Award,
  Heart,
  Zap,
  User,
  Bell,
  Settings,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Flame,
  Droplets,
  Moon,
  Activity,
  MapPin,
  Users,
  BookOpen,
  ChefHat,
} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  ComposedChart,
  Area,
  Pie,
  Cell,
} from "recharts";

import vid from "../assets/vid3.mp4";

const FitnessDashboard = () => {
  const name = "Anthony";

  const CardData = [
    {
      heading: "Today's calories",
      text: " +12% increase from yesterday",
      value: 569,
      icon: <Flame className="font-extrabold text-green-600" />,
      color: "green-600",
      bgColor: "bg-green-100",
    },
    {
      heading: "Active Minutes",
      text: "Target: 120 min ",
      value: 87,
      icon: <Activity className="font-extrabold text-blue-600" />,
      color: "blue-600",
      bgColor: "bg-blue-100",
    },
    {
      heading: "Heart Rate",
      text: "Resting BPM",
      value: 569,
      icon: <Heart className="font-extrabold text-red-600" />,
      color: "red-600",
      bgColor: "bg-red-100",
    },
    {
      heading: "Water Intake",
      text: "Glasses today",
      value: 6 / 8,
      icon: <Droplets className="font-extrabold text-cyan-600" />,
      color: "cyan-600",
      bgColor: "bg-cyan-100",
    },
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  const DailySchedule = [
    {
      time: "9:00AM",
      howLong: "45min",
      heading: "Upper Body Strength",
      Trainer: "Mike Johnson",
      social: " Personal Training",
    },
    {
      time: "7:00AM",
      howLong: "25min",
      heading: "Cardio",
      Trainer: "Tony Montana",
      social: "Group Class",
    },
    {
      time: "10:00AM",
      howLong: "35min",
      heading: "Yoga Flow",
      Trainer: "Gabriel Gonzalles",
      social: " Personal Training",
    },
    {
      time: "8:00AM",
      howLong: "15min",
      heading: "Lower Body Strength",
      Trainer: "Mike Tyson",
      social: "Group Class",
    },
  ];

  const AchievementsData = [
    {
      icon: <Flame />,
      color: "text-amber-700",
      heading: "Heading",
      text: "description",
    },
    {
      icon: <Target />,
      color: "text-green-400",
      heading: "Heading",
      text: "description",
    },
    {
      icon: <Award />,
      color: "text-amber-500",
      heading: "Heading",
      text: "description",
    },
    {
      icon: <Heart />,
      color: "text-red-400",
      heading: "Heading",
      text: "description",
    },
  ];

  const QuickViewsData = [
    {
      icon: <BookOpen />,
      color: "text-amber-700",
      backgroundColor: "bg-amber-100",
      border: "border-amber-700",
      heading: "Browse Programs",
    },
    {
      icon: <Users />,
      color: "text-green-400",
      backgroundColor: "bg-green-100",
      border: "border-green-400",
      heading: "Find Workout Buddy",
    },
    {
      icon: <ChefHat />,
      color: "text-amber-500",
      backgroundColor: "bg-yellow-200",
      border: "border-yellow-500",
      heading: "Meal Planning",
    },
    {
      icon: <MapPin />,
      color: "text-red-400",
      backgroundColor: "bg-red-100",
      border: "border-red-400",
      heading: "Find Gyms Nearby",
    },
  ];

  return (
    <Fragment>
      <div className="h-full mx-12 mb-12">
        <div className="flex justify-between ">
          <h1 className="text-2xl">
            Welcome back, <span className="text-green-600">{name}</span>
          </h1>
          <div className="flex justify-between gap-3.5">
            <button>
              <Bell className="inline" /> <span>Notifications</span>
            </button>
            <button>
              <Settings className="inline" /> <span>Settings</span>
            </button>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            Ready to crush your fitness goal?
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1  gap-6 my-4 ">
          {CardData.map((item) => {
            return (
              <>
                <div className="flex grid-cols-1 justify-between items-center w-full border-[1px] border-gray-200 p-5 rounded-lg shadow-md shadow-gray-200">
                  <div>
                    <p className="text-gray-500 text-md">{item.heading}</p>
                    <h1 className="py-4 text-3xl">546</h1>
                    <p className={`text-${item.color} text-sm`}>{item.text}</p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className={`${item.bgColor} w-full min-h-[3rem] min-w-[3rem] border-0 flex items-center justify-center p-4`}
                    >
                      {item.icon}
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="bg-white mx-auto relative   border-2 rounded-lg p-6 shadow-md shadow-gray-200 mb-10">
              <h1 className="mt-1.5 mb-4 ">
                <Zap className="inline mr-1.5 text-green-600" /> Current Workout{" "}
              </h1>

              <video
                src={vid}
                controls
                muted
                loop
                className="rounded-lg  z-0 w-full min-h-[25rem] h-[35rem]  object-cover"
              />
              <div className="absolute z-20 bottom-30 left-1/2 ">
                <h1 className="my-3.5 text-3xl text-white">Ready to Start?</h1>
                <p className="my-1 text-xl text-gray-200">
                  Begin your scheduled workout
                </p>
                <Button className="text-green-600 p-6  w-full">
                  <Play className="inline " />
                  <span className="text-white text-bold">Start Workout</span>
                </Button>
              </div>
            </div>
            <div className="bg-white mx-auto  border-2 rounded-lg p-6 shadow-md shadow-gray-200 mb-10">
              <h1>
                {" "}
                <TrendingUp className="inline text-green-600 my-1.5" /> Weekly
                Progress
              </h1>
              <LineChart
                width={1000}
                height={400}
                data={data}
                margin={{ top: 35, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
            <div className="bg-white mx-auto  border-2 rounded-lg p-6 shadow-md shadow-gray-200 mb-10">
              <ComposedChart width={1000} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </div>
          </div>

          {/* RIGHT SIDE STARTS HERE */}
          <div className="flex flex-col col-span-1">
            <div className=" border-2 shadow-md shadow-gray-200 rounded-lg p-4 mb-4">
              <h1>
                {" "}
                <Calendar className="inline text-green-300 my-1.5 mr-0.5" />{" "}
                Today's Schedule
              </h1>

              <div className="flex flex-col  my-4">
                {DailySchedule.map((schedule) => {
                  return (
                    <>
                      <div className="flex justify-between gap-1 items-center bg-gray-100 p-3 my-1.5 rounded-md">
                        <div className="flex flex-col justify-center items-center">
                          <h1>{schedule.time}</h1>
                          <p>{schedule.howLong}</p>
                        </div>
                        <div className="">
                          <h1>{schedule.heading} </h1>
                          <p>{schedule.Trainer}</p>
                          <Button
                            variant="outline"
                            className="bg-green-200 p-3 text-sm"
                          >
                            {" "}
                            {schedule.social}
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="outline"
                            className="w-full rounded  border-0 shadow-0   bg-gray-100"
                          >
                            <ChevronRight />
                          </Button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className=" border-2 shadow-md shadow-gray-200 rounded-lg p-4 mb-4">
              <div>
                <h1>
                  <Award className="inline mr-0.5 text-green-300 my-1.5" />{" "}
                  Recent Achievements
                </h1>
                <div className="flex flex-col justify-center mt-4">
                  {AchievementsData.map((achievement, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className="flex justify-start items-center p-4 gap-4 bg-gray-100 mb-4 rounded-lg"
                        >
                          <div className="">
                            <Button
                              className={`${achievement.color} bg-gray-100 shadow-0 border-0`}
                            >
                              {achievement.icon}
                            </Button>
                          </div>
                          <div>
                            <h1>{achievement.heading}</h1>
                            <p>{achievement.text}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className=" border-2 shadow-md shadow-gray-200 rounded-lg p-4 mb-4">
              <div>
                <h1>
                  <BookOpen className="text-green-400 inline mr-1.5" /> Quick
                  Views
                </h1>
              </div>
              <div>
                <div className="flex flex-col justify-center mt-4">
                  {QuickViewsData.map((QuickView, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className={`flex justify-start items-center border-2  ${QuickView.border}  p-4 gap-4 ${QuickView.backgroundColor} mb-4 rounded-lg`}
                        >
                          <div
                            className={`border-2 rounded-md  ${QuickView.border} `}
                          >
                            <Button
                              className={`rounded-xl ${QuickView.color} ${QuickView.backgroundColor} shadow-0 border-0  `}
                            >
                              {QuickView.icon}
                            </Button>
                          </div>
                          <div>
                            <h1>{QuickView.heading}</h1>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FitnessDashboard;
