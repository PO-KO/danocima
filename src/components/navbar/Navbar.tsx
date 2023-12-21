import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="navbar bg-primary-dark h-16">
      <div className="navbar-container flex justify-between items-center h-full p-3">
        <div className="left flex items-center gap-5">
          <div className="logo text-2xl text-soft font-extrabold">Danocima</div>
          <div className="searchbar rounded-full border-2 overflow-hidden border-secondary px-1 py-1 flex justify-between">
            <input
              type="text"
              className={`outline-none placeholder:text-xs bg-transparent text-xs transition-all ${
                showSearch ? "w-52 px-1" : "w-0"
              }`}
              placeholder="Search"
            />
            <span className="search-icon" onClick={() => setShowSearch(true)}>
              <SearchIcon
                sx={{ fontSize: 23 }}
                className="text-secondary cursor-pointer"
              />
            </span>
          </div>
        </div>
        <div className="right">
          <ul className="links flex">
            <li className="">
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
