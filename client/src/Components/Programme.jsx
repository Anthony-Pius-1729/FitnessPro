import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Programme = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const URLS = {
    1: "http://localhost:8080/exercises/all-exercises",
    2: "http://localhost:8080/diet/diet-plans",
  };

  const [currentUrl, setCurrentUrl] = useState(URLS);

  const categorizeMeal = (title) => {
    const lowerTitle = title?.toLowerCase();

    const breakfastKeywords = [
      "pancake",
      "breakfast",
      "cereal",
      "oatmeal",
      "toast",
      "egg",
      "morning",
      "waffle",
      "muffin",
      "granola",
      "bagel",
    ];
    const lunchKeywords = [
      "sandwich",
      "salad",
      "soup",
      "wrap",
      "burger",
      "pizza",
      "pasta",
      "lunch",
      "bowl",
      "quinoa",
    ];
    const dinnerKeywords = [
      "steak",
      "chicken",
      "fish",
      "roast",
      "dinner",
      "curry",
      "stir",
      "casserole",
      "lasagna",
      "risotto",
      "pork",
      "beef",
    ];

    if (breakfastKeywords.some((keyword) => lowerTitle?.includes(keyword))) {
      return "breakfast";
    }
    if (lunchKeywords.some((keyword) => lowerTitle?.includes(keyword))) {
      return "lunch";
    }
    if (dinnerKeywords.some((keyword) => lowerTitle?.includes(keyword))) {
      return "dinner";
    }

    return "lunch";
  };

  const Buttons = [
    {
      id: 1,
      name: "Exercise",
    },
    {
      id: 2,
      name: "Meals",
    },
  ];

  const getCategories = () => {
    if (activeButtonId === 1) {
      const muscles = [
        ...new Set(data.map((item) => item.muscle).filter(Boolean)),
      ];
      return muscles;
    } else if (activeButtonId === 2) {
      return [];
    }
    return [];
  };

  const getExerciseTypes = () => {
    if (activeButtonId === 1) {
      const types = [...new Set(data.map((item) => item.type).filter(Boolean))];
      return types;
    }
    return [];
  };

  const getDifficultyLevels = () => {
    if (activeButtonId === 1) {
      const difficulties = [
        ...new Set(data.map((item) => item.difficulty).filter(Boolean)),
      ];
      return difficulties;
    }
    return [];
  };

  const handleClick = (id) => {
    setActiveButtonId(id);
    setSelectedCategory("all");
  };

  useEffect(() => {
    console.log(activeButtonId);
    console.log(currentUrl[activeButtonId]);
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(currentUrl[activeButtonId]);

        if (activeButtonId === 1) {
          const value = await res.json();
          setData(value);
          setFilteredData(value);
        } else if (activeButtonId === 2) {
          console.log("sgdsbsd");
          const value = await res.json();
          console.log("sgdsbsd", value);
          setData(value.results);
          setFilteredData(value.results);
        }
      } catch (error) {
        console.log("Error fetching Data");
        throw new Error("An error occured while fetching Data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeButtonId]);

  const handleSearch = (event) => {
    const text = event.currentTarget.value;
    setSearch(text);

    let searchedData = [];

    if (activeButtonId === 1) {
      searchedData = data.filter(
        (item) =>
          item?.name?.toLowerCase().includes(text.toLowerCase()) ||
          item?.instructions?.toLowerCase().includes(text.toLowerCase()) ||
          item?.muscle?.toLowerCase().includes(text.toLowerCase()) ||
          item?.type?.toLowerCase().includes(text.toLowerCase())
      );
    } else if (activeButtonId === 2) {
      searchedData = data.filter((item) =>
        item?.title?.toLowerCase().includes(text.toLowerCase())
      );
    }

    const finalData =
      selectedCategory === "all"
        ? searchedData
        : searchedData.filter((item) => {
            if (activeButtonId === 1) {
              return item.muscle === selectedCategory;
            }
            return true;
          });

    setFilteredData(
      text
        ? finalData
        : selectedCategory === "all"
        ? data
        : data.filter((item) => item.muscle === selectedCategory)
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    let categoryData =
      category === "all"
        ? data
        : data.filter((item) => {
            if (activeButtonId === 1) {
              return item.muscle === category;
            }
            return true;
          });

    if (search) {
      if (activeButtonId === 1) {
        categoryData = categoryData.filter(
          (item) =>
            item?.name?.toLowerCase().includes(search.toLowerCase()) ||
            item?.instructions?.toLowerCase().includes(search.toLowerCase()) ||
            item?.muscle?.toLowerCase().includes(search.toLowerCase()) ||
            item?.type?.toLowerCase().includes(search.toLowerCase())
        );
      } else if (activeButtonId === 2) {
        categoryData = categoryData.filter((item) =>
          item?.title?.toLowerCase().includes(search.toLowerCase())
        );
      }
    }

    setFilteredData(categoryData);
  };

  const handleImageClick = async (id) => {
    console.log("Id is: ", id);
    try {
      const res = await fetch(
        `http://localhost:8080/exercises/all-exercises/${id}`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("Error loading file: ", err);
      throw new Error("Error loading files");
    }
  };

  return (
    <>
      <div className="mx-14 my-6">
        <div className="flex justify-center w-full items-center">
          <div className="p-4 bg-gray-100 rounded-lg ">
            <div className="flex justify-between gap-x-1">
              {Buttons.map((btn, index) => {
                const isActive = btn.id === activeButtonId;
                return (
                  <button
                    key={btn.id}
                    onClick={() => handleClick(btn.id)}
                    className={`${
                      isActive
                        ? `bg-white text-black border-2 shadow-md shadow-gray-300 `
                        : `bg-gray-200 text-gray-400`
                    } w-36 cursor-pointer font-semibold p-3 border-[1px]  rounded-lg transition-colors duration-400 ease-linear `}
                  >
                    {btn.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {activeButtonId === 1 && data.length > 0 && (
          <div className="flex flex-col items-center mt-4">
            <div className="flex gap-2 mb-4 flex-wrap justify-center">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === "all"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                All Muscles
              </button>
              {getCategories().map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedCategory === category
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        <section>
          <div className=" flex flex-col justify-center items-center">
            <input
              onChange={handleSearch}
              type="text"
              placeholder={`search for ${
                activeButtonId === 1 ? `exercise` : `meals`
              }`}
              className="p-6 w-3/4 rounded-lg  focus:outline-0 focus:ring-0 bg-gray-200 my-6 "
            />
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-8 mx-10 my-10">
            {!loading ? (
              filteredData?.map((val, index) => {
                // console.log(val._id);
                return (
                  <Link
                    to={`${
                      activeButtonId == 1
                        ? `/exercises/${val._id}`
                        : `/exercises/${val.id}`
                    }`}
                  >
                    <div
                      key={index}
                      className=""
                      onClick={() => handleImageClick(val?.id)}
                    >
                      <img
                        className="w-64 h-56 object-cover "
                        src={`${
                          activeButtonId == 1
                            ? `https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
                            : `${val.image}`
                        }`}
                      />
                      <div>
                        {activeButtonId === 1 ? (
                          <>
                            <h1 className="font-semibold text-lg">
                              {val?.name}
                            </h1>
                            <p className="text-sm text-gray-600 capitalize">
                              {val?.muscle} • {val?.type} • {val?.difficulty}
                            </p>
                            <p className="text-sm text-gray-500">
                              {`${val?.instructions?.slice(0, 60)}...`}
                            </p>
                          </>
                        ) : (
                          <>
                            <h1 className="font-semibold text-lg">
                              {val?.title}
                            </h1>
                            <p className="text-sm text-gray-600 capitalize">
                              {categorizeMeal(val?.title)} • ID: {val?.id}
                            </p>
                            <p className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full inline-block mt-1">
                              Recipe #{val?.id}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="flex col-span-5 justify-center h-screen min-h-screen items-center">
                <h1 className="text-green-600 text-3xl">Loading data ...</h1>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Programme;
