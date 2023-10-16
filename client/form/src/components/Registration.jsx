import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/registration", { name, email, password })
      .then((result) => console.log(result));
    navigate("./login");
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="border border-black rounded w-5/6 p-2"
        onSubmit={handleSubmit}
      >
        <h2 className=" text-2xl mb-4">Registration</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-300 w-full p-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 w-full p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 w-full p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center flex-col text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Register
          </button>
          <h1>Go to login page</h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
