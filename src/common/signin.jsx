import React from "react";
import background from "../assets/freestocks-8hAsLeE6Fbo-unsplash.jpg";
import "./signin.css";

const Signin = ({ history }) => {
  return (
    <div className="container-small">
      <div className="relative bottom-10 bg-gradient-to-b from-gray-700 to-black h-44">
        <h1 className="text-2xl font-extrabold text-white m-5 relative top-10 w-60 p-10">
          Log into your account
        </h1>
      </div>
      <button
        className="absolute top-5 left-5 text-white text-xs"
        onClick={() => back(history)}
      >
        <i className="fa fa-chevron-left relative right-1"></i>
        BACK
      </button>

      <div className="p-10 pt-0 bg-white max-w-xl">
        <div className="mb-4 relative">
          <input
            className="input border-b-2 border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="email"
            type="text"
            autoFocus
            onChange={handleFill}
          />
          <label className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-sm mt-2 cursor-text">
            Email
          </label>
        </div>
        <div className="mb-4 relative">
          <input
            className="input border-b-2 border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="password"
            type="password"
          />
          <label className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-sm mt-2 cursor-text">
            Password
          </label>
        </div>
        <div className="checkbox text-xs font-bold checked:bg-black">
          <input type="checkbox" name="Remember me" id="" /> Remember me
        </div>
        <div className="relative -bottom-px w-60 m-auto">
          <button className="w-full p-3 border-0 rounded-full mt-5 mb-3 font-bold bg-black text-white">
            Sign In
          </button>
          <button className="w-full p-3 border-0 rounded-full mt-1 font-bold bg-blue-600 border-white border-2  text-white">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>{" "}
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
const back = ({ history }) => {
  console.log(history);
};
const handleFill = ({ e }) => {
  console.log(e);
};
export default Signin;
