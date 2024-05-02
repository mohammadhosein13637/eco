// DashboardPage.js
"use client";
import React, { useState } from "react";

const DashboardPage = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can submit the inputs to the backend
    // For demonstration purposes, we'll just log the values
    console.log("Color:", color);
    console.log("Size:", size);
    console.log("Description:", description);
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={handleColorChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <span className="text-xl font-bold">:</span>
          <input
            type="text"
            placeholder="Size"
            value={size}
            onChange={handleSizeChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <span className="text-xl font-bold">:</span>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 text-black"
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
