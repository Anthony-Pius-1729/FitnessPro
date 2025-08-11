import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommendations from "./Recommendations";

const Exercise = () => {
  const params = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/exercises/all-exercises/${params.id}`
        );
        const data = await res.json();
        setExercise(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercise:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
              <span className="ml-3 text-gray-600">
                Loading exercise details...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">!</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Exercise not found
          </h2>
          <p className="text-gray-600">
            The requested exercise could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Exercise Details
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {exercise.name}
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Instructions Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg">📋</span>
                </div>
                Instructions
              </h2>
            </div>
            <div className="px-8 py-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                {exercise.instructions}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <Recommendations
          name={exercise.name}
          instructions={exercise.instructions}
        />
      </div>
    </div>
  );
};

export default Exercise;
