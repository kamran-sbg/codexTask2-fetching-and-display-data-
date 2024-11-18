import React, { useState } from "react";

const Photos = () => {
  const urlh = "https://api.unsplash.com/search/photos?page=1&query=";
  const accessKey = "PclLFT0r583QS9jbwz2c-qZxufKHEFJ---cG3kRY0g0";
  let [qsearch, setQsearch] = useState("");
  let [img, setImg] = useState([]);

  // Update the search query
  let searchImg = (e) => {
    setQsearch(e.target.value);
  };

  // Fetch images from Unsplash API
  let setBackgroundImage = async () => {
    try {
      const config = {
        headers: { Authorization: `Client-ID ${accessKey}` },
      };
      const qrl = `${urlh}${qsearch}`;
      const res = await fetch(qrl, config);
      const data = await res.json();
      setImg(data.results); // Store image data
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Search bar */}
      <div className="flex justify-center p-4 bg-orange-200 rounded-xl shadow-lg">
        <div className="relative w-96">
          <input
            value={qsearch}
            onChange={searchImg}
            type="text"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-md placeholder-gray-500"
            placeholder="Search..."
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 16a6 6 0 100-12 6 6 0 000 12zm0 0l4 4m0-4h-4"
            ></path>
          </svg>
        </div>
        <button
          className="bg-blue-500 text-white w-24 h-10 rounded-xl ml-4 hover:bg-blue-600 transition-all"
          onClick={setBackgroundImage}
        >
          Search
        </button>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {img.map((data) => (
          <div
            key={data.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={data.urls.small}
              alt={data.alt_description}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex justify-center items-center h-full text-white text-xl font-semibold">
                {data.alt_description || "Image"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
