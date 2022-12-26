import React from "react";

const SearchRadioButtons = ({ handleClick, category }) => {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="grid grid-cols-3 md:w-[30rem] space-x-2 rounded-lg md:bg-neutral-800 p-2 font-exo">
        <div>
          <input
            type="radio"
            onChange={handleClick}
            name="category"
            value="people"
            id="people"
            className="peer hidden"
            checked={category === "people"}
          />
          <label
            htmlFor="people"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-sky-600 peer-checked:font-bold peer-checked:text-white active:outline-none"
          >
            People
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            onChange={handleClick}
            value="planets"
            id="planets"
            className="peer hidden"
            checked={category === "planets"}
          />
          <label
            htmlFor="planets"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-sky-600 peer-checked:font-bold peer-checked:text-white"
          >
            Planets
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            value="starships"
            onChange={handleClick}
            id="starships"
            className="peer hidden"
            checked={category === "starships"}
          />
          <label
            htmlFor="starships"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-sky-600 peer-checked:font-bold peer-checked:text-white"
          >
            Starships
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchRadioButtons;
