import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

const Account = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showFriendsProfile, setShowFriendsProfile] = useState(false);

  return (
    <div className="relative h-screen flex flex-col gap-4">

      {/* NavBar */}
      <div className="flex justify-between bg-stone-600 py-1 px-4">
        
        {/* Logo */}
        <div className=" flex gap-2 justify-center items-center">
          <h1 className="text-xl text-gray-100">Chat Application </h1>
          <FaRocketchat style={{ fontSize: "2em", color: "white" }} />
        </div>

        {/* Profile Logo */}
        <div onClick={() => {setShowProfile(!showProfile);}}
          className="h-10 w-10 text-center text-xs border bg-white rounded-full cursor-pointer">
        </div>

        {/* Profile Details */}
        {showProfile ? (
          <div className="absolute top-15 right-10 px-4 py-2 text-slate-50 bg-gray-500 shadow-md rounded-md z-1">
            <p>Name : Rohit</p>
            <p>Email : rohit0@abc.com</p>
            <div className=" flex gap-2 items-center cursor-pointer">
              <p>Sign Out</p>
              <GoSignOut />
            </div>
          </div>
        ) : ("")}
      </div>

      {/* Content Container*/}
      <div className="flex gap-2 h-screen px-2 pb-2">

        {/* left sidebar container*/}
        <div className="border border-slate-200 rounded-t-md shadow-xl">

          {/* Search input */}
          <div className="flex gap-2 justify-center items-center border-b border-gray-200 p-2 pr-15 rounded-md ">
             <FaSearch style={{ fontSize: "1em", color: "gray" }} />
            <input type="text" name="search" placeholder="Search" className="border-0 outline-0 cursor-pointer"/>
          </div>

          {/* Users name */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-black font-medium bg-slate-50 p-2 py-4">User 1</div>
            <div className="text-black font-medium bg-slate-50 p-2 py-4">User 2</div>
            <div className="text-black font-medium bg-slate-50 p-2 py-4">User 3</div>
            <div className="text-black font-medium bg-slate-50 p-2 py-4">User 4</div>

          </div>
        </div>

        {/* right sidebar container */}
        <div className=" border border-slate-200 rounded-md shadow-xl flex-1 -z-10">
          
          {/* chat of a user */}
          <div className=" relative h-full flex flex-col">

            {/* header */}
            <div className="flex justify-between items-center bg-neutral-100 p-1" >
              <p className="font-semibold text-neutral-950">User Name</p>
              <div onClick={() => {setShowFriendsProfile(!showFriendsProfile);}}
               className="h-10 w-10 text-center text-xs border bg-white rounded-full cursor-pointer"></div> 
            </div>

            {/* Messages */}
            <div className=" flex-1">
              Chats
            </div>

            {/* Send Message */}
            
          <div className="flex justify-between items-center border border-gray-200 h-12 ">
            <input type="text" name="message" placeholder="Type a message..." className="pl-1 flex-1 h-12 border-0 outline-0 cursor-pointer"/>
            <button type="submit" className="bg-indigo-800 text-slate-50 font-sans h-12 px-4 cursor-pointer">Send</button>
          </div>

          {/* Profile Details */}
           {showFriendsProfile ? (
           <div className="absolute top-15 right-10 px-4 py-2 text-slate-50 bg-gray-500 shadow-md rounded-md z-1">
            <p>Name : Rohit</p>
            <p>Email : rohit0@abc.com</p>
          </div>
        ) : ("")}

          </div>
        </div>


      </div>
    </div>
  );
};

export default Account;
