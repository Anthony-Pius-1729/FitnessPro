import React from "react";

const UserResponse = ({ userMessage }) => {
  return (
    <>
      <div className="p-4 rounded-lg bg-green-500 text-white w-1/2 block my-3.5">
        <p>{userMessage}</p>
      </div>
    </>
  );
};

export default UserResponse;
