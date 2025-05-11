import React, { useState } from "react";
import Login from "./login";
import Signup from "./Signup";
import { FaRocketchat } from "react-icons/fa";

const Home = () => {
  const [toggleSign, setToggleSign] = useState(true);

  const handleToggleSign = () => {
    setToggleSign(!toggleSign);
  };
  

  return (
    <div className="h-screen font-serif">
      <div className="bg-gray-600 h-1/4 flex gap-2 justify-center items-center">
        <h1 className="text-2xl text-gray-100">Chat Application </h1>

        <FaRocketchat style={{ fontSize: "3em", color: "white" }} />
      </div>

      <div className="flex flex-col items-center mt-5 ">
        <h2 className="text-xl text-black mb-4 ">
          {toggleSign ? "Sign In" : "Create An Account"}
        </h2>

        {toggleSign ? <Login /> : <Signup />}

        <p className="text-gray-600 mt-5">
          {toggleSign
            ? "Don't have an account ? "
            : "Already have an account ? "}
          <span
            className="cursor-pointer text-indigo-800"
            onClick={handleToggleSign}
          >
            {toggleSign ? "Sign up here" : "Sign in here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
