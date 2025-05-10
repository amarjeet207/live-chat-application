import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const login = () => {

    const [passVisible, setPassVisible] = useState(false);

    const handlePassVisibility = () =>{
        setPassVisible(!passVisible);
    } 
  return (
    <form method='post' className=' flex flex-col gap-4 w-5/12'>
        <input type="email" name="email" placeholder='Email' className='border border-gray-600 py-2 px-1 cursor-pointer rounded-md'/>
        
        <div className='py-2 px-1 border border-gray-600 flex items-center justify-between rounded-md'>
        
        <input type={passVisible ? "text" : "password"} name="password" placeholder='Password' className='border-0 flex-1 outline-0 cursor-pointer '/>
        
        {passVisible ? <FaRegEyeSlash onClick={handlePassVisibility} className='cursor-pointer' style={{ fontSize: '1.3em' }}/> : 
            <FaRegEye onClick={handlePassVisibility} className='cursor-pointer' style={{ fontSize: '1.3em' }}/>}
        </div>
        
        <button type="submit" className='bg-black text-slate-50 py-2 cursor-pointer  rounded-md'>Sign In</button>
    </form>
  )
}

export default login