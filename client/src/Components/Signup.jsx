import React from "react";

const Signup = () => {
  return (
    <form method="post" className=" flex flex-col gap-4 w-5/12">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md "
      />
      <input type="file" 
      name="profilePicture" 
      placeholder="Profile Picture" 
      className="border border-gray-600 text-gray-600 py-2 px-1 cursor-pointer rounded-md "
      />

      <button
        type="submit"
        className="bg-black text-slate-50 py-2 cursor-pointer  rounded-md"
        
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
