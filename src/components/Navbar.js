import React from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";

const Navbar = (props) => {
let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

    {/* Login, SignUp, Logout, Dashboard */}
      <div className='flex items-center gap-x-4'>
        { !isLoggedIn &&
            <Link to="/login">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Login
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/login">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                    window.localStorage.removeItem("LoggedIn");
                }}>
                    Logout
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/dashboard">
                <button className="bg-richblack-800  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-blue-500">
                    Dashboard
                </button>
            </Link>
        }
        { !isLoggedIn &&
            <Link to="/signup">
                <button className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Sign Up
                </button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
