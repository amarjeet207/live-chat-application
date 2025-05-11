import React, { useState } from "react";

const Signup = () => {

  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

 const handleSignUp = async (e) => {
    e.preventDefault();

   try {
    const response = await fetch("http://localhost:3000/api/signup",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        password
      }),
    })

    if (!response.ok) {
      throw new Error(`Unable to create account. Try again`);
    }

    const data = await response.json();
    console.log('Success:', data);

   } catch (error) {
    console.error('Error:', error);
   }
  }


  return (
    <form method="post" className=" flex flex-col gap-4 w-5/12" onSubmit={handleSignUp}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md"
        onChange={(e)=>{setFullName(e.target.value)}}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md"
        onChange={(e)=>{setEmail(e.target.value)}}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md "
        onChange={(e)=>{setPassword(e.target.value)}}
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
