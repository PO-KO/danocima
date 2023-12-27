import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSearchbarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchKeyword(event.target.value);
  };

  console.log(searchKeyword);

  return (
    <div
      className="navbar h-16 absolute z-50 w-full "
      style={{
        background:
          "linear-gradient(180deg, rgba(23,24,26,1) 30%, rgba(23,24,26,0) 100%)",
      }}
    >
      <div className="navbar-container flex justify-between items-center h-full p-3">
        <div className="left flex items-center gap-5 max-md:w-full max-md:justify-between">
          <div className="md:hidden cursor-pointer">
            <DehazeIcon />
          </div>
          <div className="logo text-2xl text-soft font-extrabold">Danocima</div>
          <div className="searchbar rounded-full border-2 overflow-hidden border-secondary px-1 py-1 flex justify-between">
            <input
              type="text"
              className={`outline-none placeholder:text-xs bg-transparent text-xs transition-all ${
                showSearch ? "w-28 sm:w-52 px-1" : "w-0"
              }`}
              placeholder="Search"
              onChange={handleSearchbarChange}
              value={searchKeyword}
            />

            <span className="search-icon" onClick={() => setShowSearch(true)}>
              <SearchIcon
                sx={{ fontSize: 23 }}
                className="text-secondary cursor-pointer "
              />
            </span>
          </div>
        </div>
        <div className="right hidden md:block">
          <ul className="links flex gap-4 items-center text-sm">
            <li className="link-item hover:text-secondary">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="link-item hover:text-secondary">
              <NavLink to="/browse/movies">Movies</NavLink>
            </li>
            <li className="link-item hover:text-secondary">
              <NavLink to="/browse/shows">TV Shows</NavLink>
            </li>
            <li className="link-item hover:text-secondary">
              <NavLink to={"/browse"}>Browse</NavLink>
            </li>
            <li className="link-item hover:text-secondary">
              <NavLink to="/profile/1" className="flex items-center gap-1">
                <span>{isLogin ? "name" : "Login"}</span>
                {isLogin ? (
                  <img src="" alt="profile picture" />
                ) : (
                  <AccountCircleIcon />
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
