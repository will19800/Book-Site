import React from "react";
import {useState} from "react";

const EmailSignUp = ({ closeEmailSignUpModal }) => {
  const[fullName,setFullName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit = async () => {
    try {
      const nameParts = fullName.split(" ")
      const firstName = nameParts[0]
      const lastName = nameParts[1]

      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      const data = await response.json();
      console.log(data)

    } catch {}




  }

  return (
    <div className="modalBackground fixed inset-0 bg-gray-900 bg-opacity-30 z-50">
      <div className="modalCell my-32 flex items-center justify-center">
        <div className="ModalContent font-radiocanada bg-white w-96 rounded-xl px-6 py-2">
          <div className="buttonContainer flex justify-start">
            <button onClick={() => closeEmailSignUpModal(false)}>X</button>
          </div>
          <div className="modalTitle text-center">
            <h1 className="text-4xl font-black tracking-tighter">Sign Up</h1>
            <div className="my-2 px-1 text-grey">
              Sign in with your email here.
            </div>
          </div>
          <div className="modalBody mt-8">
            <div className="bg-white flex outline mx-auto mb-3 rounded-xl shadow-lg text-center p-3 w-80">
              <input
                className="bg-transparent flex-grow outline-none custom-input items-center placeholder-grey placeholder-opacity-0.5"
                type="Text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="bg-white flex outline mx-auto mb-3 rounded-xl shadow-lg text-center p-3 w-80">
              <input
                className="bg-transparent flex-grow outline-none custom-input items-center placeholder-grey placeholder-opacity-0.5"
                type="Text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-white flex outline mx-auto mb-3 rounded-xl shadow-lg text-center p-3 w-80">
              <input
                className="bg-transparent flex-grow outline-none custom-input items-center placeholder-grey placeholder-opacity-0.5"
                type="Text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <form>
            <a className="email_signup block mx-auto mb-3 rounded-xl bg-lightblue shadow-lg text-center p-3 w-80" onClick={handleSubmit}>
              <span>Create your free account</span>
            </a>
            </form>
            <div className="text-xs text-center mx-6 my-5">
              By continuing you agree to our Terms of Service. Read our Privacy
              Policy.
            </div>
            <div className="border-1 justify-center h-0.5 w-90 bg-darkwhite mx-auto"></div>
            <div className="text-s text-center mx-6 my-5">
              Already have an account? <a>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;
