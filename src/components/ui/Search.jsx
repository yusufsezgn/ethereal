import { useAppContext } from "@/context/Wrapper";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ onSearch }) => {
  const [filterText, setFilterText] = useState('');
  const { language, setLanguage } = useAppContext()

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      onSearch(filterText);
    }
  };

  return (
    <label
      htmlFor=""
      className="px-3 h-10 rounded-full flex items-center relative w-full"
    >
      <IoSearch className="w-6 h-6 text-white absolute right-7" />
      <input
        type="text"
        value={filterText}
        onChange={handleChange}
        onKeyDown={handleSearch}
        name=""
        id=""
        className="bg-none bg-color3 rounded-full h-full w-full outline-none transition-all px-5 text-white font-medium focus:shadow-xl"
        placeholder={language === "TR" ? "Kripto para ara" : "Search coin"}
      />
    </label>
  );
};

export default Search;
