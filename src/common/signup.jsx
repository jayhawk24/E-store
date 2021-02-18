import React from "react";
import background from "../assets/freestocks-8hAsLeE6Fbo-unsplash.jpg";
const Signup = () => {
  return (
    <div className="container-small">
      <img
        className="absolute top-0 h-auto w-auto"
        src={background}
        alt="cant load background"
      />
      <div className="relative top-72 -bottom-px w-60 m-auto">
        <h1 className="text-2xl font-extrabold text-white m-5">
          Ideal store for your shopping
        </h1>
        <hr />
        <button className="w-full p-3 border-0 rounded-full mt-5 font-bold bg-white">
          Sign Up with Email
        </button>
        <button className="w-full p-3 border-0 rounded-full mt-1 font-bold bg-transparent border-white border-2  text-white">
          <i className="fa fa-facebook-square" aria-hidden="true"></i> Continue
          with Facebook
        </button>
      </div>
      <button
        className="absolute top-5 right-5 text-white text-xs"
        onClick={signin}
      >
        SIGN IN <i className="fa fa-chevron-right relative left-1"></i>
      </button>
    </div>
  );
};
const signin = () => {
  window.location = "/signin";
};

export default Signup;
