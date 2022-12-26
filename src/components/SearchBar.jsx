import React from "react";

const SearchBar = ({ handleChange, searchText, category }) => {
  return (
    <section className="p-4 flex flex-col items-center gap-6 my-6">
      <div className="flex justify-center gap-6">
        <input
          className="px-4 py-2 font-exo bg-neutral-700 rounded-md w-80"
          name="searchText"
          type="search"
          onChange={handleChange}
          value={searchText}
          placeholder={`Search ${category}...`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-sky-600 rounded-md font-exo"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
