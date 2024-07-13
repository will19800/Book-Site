import React from "react";

function Signuppop({ closeModal }) {
  return (
    <div className="modalBackground fixed inset-0 bg-gray-900 bg-opacity-30 z-50">
      <div className="modalCell my-32 flex items-center justify-center">
        <div className="ModalContent font-radiocanada bg-white w-96 rounded-xl px-6 py-2">
          <div className="buttonContainer flex justify-start">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modalTitle text-center">
            <h1 className="text-4xl font-black tracking-tighter">Hello!</h1>
            <div className="my-2 px-1 text-grey">Use your email or another service to connect with NovelCorner.</div>
          </div>
          <div className="modalBody mt-8">
            <a className="google_signup block mx-auto mb-3 rounded-xl bg-lightgrey text-center p-3 w-80">
                <span>Continue with Google</span>
            </a>
            <a className="apple_signup block mx-auto mb-3 rounded-xl bg-lightgrey text-center p-3 w-80">
                <span>Continue with Apple</span>
            </a>
            <a className="email_signup block mx-auto mb-3 rounded-xl bg-lightblue shadow-lg text-center p-3 w-80">
                <span>Continue with Email</span>
            </a>
            <div className="text-xs text-center mx-6 my-5">
              By continuing you agree to our Terms of Service. Read our Privacy
              Policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppop;
