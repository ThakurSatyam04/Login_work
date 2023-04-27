import React from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
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

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Passwords do not matched");
            return;
        }

        const auth = getAuth();
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user,{
                    displayName:formData.firstname
                })
                setIsLoggedIn(true);
                toast.success("Account created");
                navigate("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        
        // const accountData ={
        //     ...formData
        // };

        // const finalData ={
        //     ...accountData,
        //     accountType
        // }

        // console.log("Printing final account data");
        // console.log(finalData);

       
    }

    // Firebase signup copied code


            

  return (
    <div>

    <div >

        {/* firstname and lastname */}
        <div className="flex w-full gap-x-4 mt-4">

            <label className="w-full mt-4">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">First Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="Enter first name"
                    value={formData.firstname}
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                />
            </label>

            <label className="w-full mt-4">
                <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter last name"
                    value={formData.lastname}
                    className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
                />
            </label>
        </div>
        {/* Email address */}
        <div className='mt-4'> 
        <label className="w-full mt-5">
            <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Email Id<sup className="text-pink-200">*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter your email"
                value={formData.email}
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
            />
        </label>
        </div>

        {/* createpassword and confirm password */}
        <div className="flex w-full gap-x-4 mt-4 ">
        <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-500 mb-1 leading-[1.375rem] font-bold">Create Password<sup className="text-pink-200">*</sup></p>
            <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
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
                value={formData.confirmpassword}
                className=" rounded-[0.5rem] text-richblack-50 w-full p-[12px]  border border-black-200"
            />
            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=> setShowConfirmPassword((prev)=> !prev)}>
                {showConfirmPassword? (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6" onSubmit={submitHandler}>
            Create Account
        </button>
    </div>

    <div className='text-center mt-2'>
        <p>Already have an account? <Link to='/login' className='text-yellow-500'>Sign In</Link></p> 
    </div>

    </div>
  )
}

export default SignupForm
