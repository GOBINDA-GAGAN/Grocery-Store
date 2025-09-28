import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search groceries..."
        className="w-[500px] pl-3 pr-4 py-2  bg-[#f1f0f0] rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button>
        <FiSearch
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
          size={18}
        />
      </button>
    </div>
  );
};

export default Search;
