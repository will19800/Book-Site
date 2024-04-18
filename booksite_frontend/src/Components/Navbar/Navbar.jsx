import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchform from "../SearchForm/SearchForm";
import dropDownLogo from "../../images/shittydropdown.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav id="navbar">
      <div className="flex flex-row justify-between p-3 bg-backgroundwhite items-center rounded-sm">
        <div>
          <Link to="/" className="flex flex-row items-center">
            <h1 className=" text-3xl font-overpass font-extrabold text-mainblue">Novel Corner</h1>
          </Link>
        </div>
          <div className={`${toggleMenu ? "navbar-show" : "navbar-collapse"} flex items-center font-radiocanada`}>
              <Searchform />
              <span className="border-1 h-10 w-0.5 bg-darkwhite mx-5"></span>
              <Link to="/Authentication">
                <button className="mx-3 bg-mainblue p-3 text-backgroundwhite rounded-xl shadow-md">
                Sign in
                </button>
                {/* <button className="mx-3 bg-mainblue p-3 text-backgroundwhite rounded-xl shadow-md" >
                Sign up
                </button> */}
              </Link>

              {/* <button
                type="button"
                className="ml-5 mr-3 rounded-xl hover:bg-steelblue"
                onClick={handleNavbar}
              >
                <img
                  src={dropDownLogo}
                  alt="drop down logo"
                  height={25}
                  width={50}
                />
              </button> */}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;