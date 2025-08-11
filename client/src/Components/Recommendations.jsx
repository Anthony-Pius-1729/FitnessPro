import React, { useEffect, useState } from "react";

const Recommendations = ({ name, instructions }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const result = await fetch(
          "http://localhost:8080/AI-CHAT/recommendations",
          {
            method: "POST",
            body: JSON.stringify({
              message: {
                name: name,
                instructions: instructions,
              },
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await result.json();
        const cleanedData = await JSON.parse(data);

        // console.log(typeof data);
        // console.log(typeof cleanedData);
        // const cleanedData = await JSON.parse(data);
        // console.log(typeof cleanedData);
        setRecommendations(cleanedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    if (name && instructions) {
      fetchRecommendations();
    }
  }, [name, instructions]);

  if (loading) {
    return (
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Recommendations{" "}
            <span className="italic text-sm text-gray-500 font-normal">
              from Freddy
            </span>
          </h2>
          <div className="flex items-center text-green-500">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500 mr-2"></div>
            <span className="text-sm text-gray-600">
              Loading recommendations...
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-6 rounded-xl h-40 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  console.log(recommendations);

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Recommendations{" "}
          <span className="italic text-sm text-gray-500 font-normal">
            from Freddy
          </span>
        </h2>
        <div className="flex items-center text-green-500">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">
            {recommendations.length} tips available
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recommendations?.map((rec, index) => (
          <div
            key={rec.id || index}
            className="bg-white border-2 border-gray-200 hover:border-green-500 p-6 rounded-xl h-40 transition-all duration-300 hover:shadow-lg group cursor-pointer"
          >
            <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
              {rec.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {rec.instructions.slice(0, 25)}
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-0.5 bg-green-500 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
