import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  // Function handleSearchToggle
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  // handleSubmitSearch
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`flex items-center justify-center w-full transition-all duration-300 ${
          isOpen ? "absolute top-0 left-0 bg-white h-24 z-50" : "w-auto"
        }`}
      >
        {isOpen ? (
          // Form showing if isOpen is true
          <form
            className="relative flex items-center justify-center w-full"
            onSubmit={handleSubmitSearch}
          >
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              />
              {/* Search Icon */}
              <button
                type="submit"
                onClick={handleSubmitSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700 cursor-pointer"
              >
                <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            {/* Button for close */}
            <button
              onClick={() => handleSearchToggle()}
              className="p-2 bg-red-400 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <HiMiniXMark className="h-4 w-4" />
            </button>
          </form>
        ) : (
          // Button showing if false
          <button onClick={() => handleSearchToggle()}>
            <HiMagnifyingGlass className="h-6 w-6 text-gray-700 cursor-pointer" />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
