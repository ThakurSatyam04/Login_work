import React, { useState } from 'react';
import Logo from '../assets/Logo1.jpg.jpg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Datas from '../data.json';

const Dashboard = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

const [Result, setResult] = useState('');

const handleSearch=()=>{
}

const handleOnChange=(event)=>{
    // event.preventDefault();
    {
        Datas.map((data)=>{
            // console.log(event.target.value)
            // console.log(data.title)
            // console.log(data.Facts)
            if(event.target.value === data.title){
                setResult(data.Introduction);
            }
            else{
                setResult("No result found!")
            }
        })
    }
}
  return (
    <>
        <div className='flex flex-col '>
            <div className='flex justify-between pr-5 bg-black text-white'>
                <img src={Logo} alt="" className='w-[70px]' />
                <h2 className='text-3xl bold flex items-center justify-center '>Cases</h2>
                <div>
                {
                        <Link to="/login">
                            <button className="  text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                                window.localStorage.removeItem("LoggedIn");
                                }}>
                                Logout
                            </button>
                        </Link>
                    }
                </div>

            </div>
            <div className='w-full h-[450px] flex'>
                <div className='w-[300px] bg-gray-500'>
                    <h2>This is your search</h2>
                </div>
                <div className='w-full bg-green-400'>
                    {Result}
                </div>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <input type="text" className='w-3/4 border border-red-900 h-[50px] p-3' placeholder='Type here to search' onChange={handleOnChange}/>
                <button className='bg-gray-700 text-white ml-4 rounded p-2 ' onClick={handleSearch}>Search</button>
            </div>
        </div>
    </>
  )
}

export default Dashboard
