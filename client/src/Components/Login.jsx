import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.currentTarget.value);
  };

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-amber-300 mr-4 rounded-lg p-4 text-black"
          type="text"
          name="text"
          id=""
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="bg-black text-white px-4 py-2">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
