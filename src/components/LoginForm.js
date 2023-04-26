import React from 'react'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {  

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        username:"",
        password:""
    })

    const[showPassword , setShowPassword] = useState(false);

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        // setIsLoggedIn(true);
        toast.success("logged In");
        console.log("Printing the formData");
        console.log(formData);
        navigate("/dashboard");
        window.localStorage.setItem("isLoggedIn",true);

    }

  return (
        <form onSubmit={submitHandler} className="relative flex flex-col gap-y-4 mt-6">

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">USERNAME<sup className="text-pink-200">*</sup></p>
                <input
                    required 
                    type="text" 
                    value = {formData.email} 
                    onChange={changeHandler} 
                    placeholder="Username"
                    name="email"
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] mt-3 font-bold">PASSWORD<sup className="text-pink-200">*</sup></p>
                <input
                    required 
                    type={showPassword?("text"):("password")} 
                    value = {formData.password} 
                    onChange={changeHandler} 
                    placeholder="Password"
                    name = "password"
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px] border border-black-200"
                />

                    <span className="absolute right-3 top-[50px] cursor-pointer" onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                    <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6" >
                        Sign In
                    </button>   

                    <div className='flex justify-between mt-5'>
                        <div>
                            <input type="checkbox" className='form-checkbox h-3 w-3 text-yellow-500 border-yellow-500 rounded-md m-3' />
                            <lebal className='text-yellow-50'>
                            Remember Me 
                            </lebal>
                        </div>
                        <Link to="#" >
                            <p className="text-xs mt-3 text-blue-100">
                                Forgot Password
                            </p>
                        </Link>
                    </div>
                    <div className='w-full mt-4 text-center'>
                        Not a member? <Link to='/signup' className='text-yellow-50'>Sign Up</Link>
                    </div>

            </label>
        </form>
  )
}

export default LoginForm
