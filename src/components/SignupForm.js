import React from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";



const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        error:"Enter All Details/ Username or Id Already Exist",
    })

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const submitHandler = () => {

        if(formData.password !== formData.confirmpassword){
            toast.error("Password do not match")
            return;
        }

        setTimeout(() => {
            if (!formData.email || !formData.password || !formData.firstname || !formData.lastname || !formData.confirmpassword || !formData.password) {
              setErrorMsg("");  
              return;
            }
            setErrorMsg("");
          }, 2000);

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (res) => {
            setSubmitButtonDisabled(false); 
            const user = res.user;
            await updateProfile(user,{
                displayName:formData.firstname,
            });
            setIsLoggedIn(true);
            toast.success("Account is Created")
            navigate("/dashboard");
        })
        .catch((error) => {
            setSubmitButtonDisabled(false);
            console.log("error - ", error);
            setErrorMsg(formData.error);
        });  
    }     
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitHandler(e);
        }
      };

  return (
    <div>

    <form>

        {/* firstname and lastname */}
        <div className="flex w-full gap-x-4">

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="Enter first name"
                    value={formData.firstname}
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                    onKeyDown={handleKeyPress}
                />
            </label>

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastname}
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                    onKeyDown={handleKeyPress}
                />
            </label>
        </div>
        {/* Email address */}
        <div className='mt-4'> 
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Email Id<sup className="text-pink-200">*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter your email"
                value={formData.email}
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                onKeyDown={handleKeyPress}
            />
        </label>
        </div>

        {/* createpassword and confirm password */}
        <div className="flex w-full gap-x-4 mt-2 ">
        <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Create Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                autoComplete="on"
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                onKeyDown={handleKeyPress}
            />
            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Confirm Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showConfirmPassword ? ("text"):("password")}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="confirm password"
                autoComplete="on"
                value={formData.confirmpassword}
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                onKeyDown={handleKeyPress}
            />
            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=> setShowConfirmPassword((prev)=> !prev)}>
                {showConfirmPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>
        </div>
        <div className="text-red-500 font-semibold">
            {errorMsg}
        </div>

        <button className="disabled:bg-gray-600 w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6" 
        onClick={submitHandler}
        disabled={submitButtonDisabled}>
            Create Account
        </button>
    </form>

    <div className='text-center mt-2'>
        <p>Already have an account? <Link to='/login' className='text-blue-950 font-semibold'>Sign In</Link></p> 
    </div>

    </div>
  )
}

export default SignupForm
