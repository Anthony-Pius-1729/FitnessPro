import React from "react";

const AIResponse = ({ aiMessage, loading }) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="p-4 rounded-lg bg-green-600 text-white w-full my-3.5">
          <div>
            <p>{aiMessage}</p>
          </div>
        </div>
        {loading && (
          <div className="text-green-400 animate-bounce">
            <h1 className="text-4xl ">. . .</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default AIResponse;
