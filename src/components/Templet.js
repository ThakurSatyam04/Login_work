// Common things in Login and Logout pages
import React from 'react';
// import frameImg from "../assets/frame.png";
import fb from "../assets/facebook-f.svg"
import twitter from "../assets/twitter.svg"
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// import {FcGoogle} from "react-icons/fc";

const Templet = ({title,image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex h-4/5 w-4/5 shadow-xl res:flex-col bg-gray-400'>
        <div className=" flex justify-center items-center w-1/2 wid:w-full">
          <img className="w-full h-full" src={image} alt="image"  width={200} height={200}/>
        </div>

        <div className='w-1/2 flex items-center justify-center wid:w-full'>
          <div className=' w-4/5 h-4/5 '>
            <div className='flex h-10 justify-between  mb-5'>
              <h1 className='text-[2rem] font-400'>
              {title}
              </h1>
              <div className='flex space-x-6 mr-5 mt-3'>
                <img src={fb} alt="fb" width={9}/>
                <img src={twitter} alt="twitter"width={15}/>
              </div>
            </div>

            {formtype==="signup" ?
              (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
              (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)
            }
          
          </div>
        </div>
    </div>
  )
}

export default Templet
