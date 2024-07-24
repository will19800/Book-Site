import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchform from "../SearchForm/SearchForm";
import SignIn from "../AccountPopups/SignIn";
import SignUp from "../AccountPopups/SignUp"
import EmailSignIn from "../AccountPopups/EmailSignIn";
import EmailSignUp from "../AccountPopups/EmailSignUp";

const Navbar = () => {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openEmailSignInModal, setOpenEmailSignInModal] = useState(false);
  const [openEmailSignUpModal, setOpenEmailSignUpModal] = useState(false);

  return (
    <nav id="navbar">
      <div className="flex flex-row justify-between p-3 bg-backgroundwhite items-center rounded-sm">
        <div>
          <Link to="/" className="flex flex-row items-center">
            <h1 className=" text-3xl font-overpass font-extrabold text-mainblue">Novel Corner</h1>
          </Link>
        </div>
          <div className={'flex items-center font-radiocanada'}>
              <Searchform />
              <span className="border-1 h-10 w-0.5 bg-darkwhite mx-5"></span>
              <button className="mx-3 text-mainblue" onClick={() => setOpenSignInModal(true)}>
              Sign in
              </button>
              <button className="mx-3 bg-mainblue p-3 text-backgroundwhite rounded-xl shadow-md" onClick={() => setOpenSignUpModal(true)}>
              Sign up
              </button>
          </div>
      </div>
      {openSignInModal && <SignIn closeSignInModal={setOpenSignInModal} closeEmailSignInModal={setOpenEmailSignInModal}/>}
      {openSignUpModal && <SignUp closeSignUpModal={setOpenSignUpModal} closeEmailSignUpModal={setOpenEmailSignUpModal}/>}
      {openEmailSignInModal && <EmailSignIn closeEmailSignInModal={setOpenEmailSignInModal} />}
      {openEmailSignUpModal && <EmailSignUp closeEmailSignUpModal={setOpenEmailSignUpModal} />}
    </nav>
  );
};

export default Navbar;