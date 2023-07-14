import React from "react";
import search from "../assets/search.svg";

const Search = ({ searchTerm, setSearchTerm, searchMovies }) => {
  return (
    <div className="flex items-center bg-slate-900 rounded-full py-4">
      <input
        className=" bg-transparent text-slate-400 font-sans outline-none border-none text-lg md:text-xl pl-5 sm:pr-20 md:pr-80"
        type="text"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Call your desired function here, or perform any action
            searchMovies(searchTerm);
          }
        }}
      />
      <button className=" px-10">
        <img
          className="w-[35px] h-[35px] cursor-pointer"
          src={search}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </button>
    </div>
  );
};

export default Search;
