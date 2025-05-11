import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePassVisibility = () => {
    setPassVisible(!passVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Not able to signin.`);
      }

      const data = await response.json();
      console.log(data)
      localStorage.setItem("token",data.token)
      navigate("/account");
    } catch (error) {
      console.log("error",error)
    }
  };

  return (
    <form method="post" className=" flex flex-col gap-4 w-5/12" onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-600 py-2 px-1 cursor-pointer rounded-md"
        onChange={(e)=>{setEmail(e.target.value)}}
      />

      <div className="py-2 px-1 border border-gray-600 flex items-center justify-between rounded-md">
        <input
          type={passVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="border-0 flex-1 outline-0 cursor-pointer "
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        {passVisible ? (
          <FaRegEyeSlash
            onClick={handlePassVisibility}
            className="cursor-pointer"
            style={{ fontSize: "1.3em" }}
          />
        ) : (
          <FaRegEye
            onClick={handlePassVisibility}
            className="cursor-pointer"
            style={{ fontSize: "1.3em" }}
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-slate-50 py-2 cursor-pointer  rounded-md"
      >
        Sign In
      </button>
    </form>
  );
};

export default login;
