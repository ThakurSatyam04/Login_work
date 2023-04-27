import React, { useState, useEffect} from 'react';
import Logo from '../assets/Logo1.jpg.jpg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Datas from '../data.json';
import DropDown from './Dropdown';
import LeftPart from '../components/LeftPart'

const Dashboard = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

const [Result, setResult] = useState('data');
const [show,setShow] = useState({});
const [search,setSearch] = useState(setResult);

const handleSearch=(e)=>{
    e.preventDefault();
    let mainData = {};
    Datas.map((data) => {
        if((data.title.toLowerCase().includes(Result.toLowerCase()))){
            mainData = data;
        } 
    });
    if(mainData){
        setShow(mainData);
    }
    else{
        setShow("");
    }
    setSearch("");
}

const handleOnChange=(e)=>{
    setResult(e.target.value);
    setSearch(e.target.value)
}

const showData = (data)=>{
    setShow(data);
}

useEffect(() => {
    setShow({key:"Welcome to case search"})
},[])

const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e);
    }
  };
  return (
    <>
            <div className='flex justify-between pr-5 bg-gray-800 text-white'>
                <img src={Logo} alt="" className='w-[70px]' />
                <h2 className='text-3xl bold flex items-center justify-center text-gray-200'>Cases</h2>
                <div>
                {   isLoggedIn &&
                        <Link to="/login">
                            <button className="  text-gray-200 p-1 rounded-[5px]  bg-gray-500 mt-1 border border-black"   onClick={()=>{
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
            <div className='w-screen h-[573px] flex'>
                <div className='w-[300px] bg-gray-700'>
                    <DropDown onClick={showData}/>
                    <LeftPart/>
                </div>
                <div className='relative group w-full dark:text-gray-300 border-black/10 dark:border-gray-900/50 dark:bg-[#444654]'>
                        <div className='h-[480px] w-full overflow-y-auto p-5'>
                            {
                                show.key ? show.title : "Data not found"
                            }<br/><br/>
                            {show.Introduction}<br/><br/>
                            {show.Facts}<br/><br/>
                            {show.Issues}<br/>
                            {show.Argumentsbypetitioner}<br/>
                            {show.Argumentsbyrespondents}<br/>
                            {show.Analysisofthejudgment}<br/>
                            {show.Judgement}<br/>
                            {show.Decision}<br/>
                            {show.Conclusion}<br/><br/>
                        </div>
                        <div className='absolute bg-gray-800 backdrop-filter backdrop-blur-4xl backdrop-top rounded-md h-[100px] bottom-[0px] w-full flex items-center justify-center '>
                            <input type="text" className='w-3/4 bg-gray-300 border rounded-md border-red-900 h-[50px] p-3 text-richblack-800' value={search} placeholder='Type here to search' onChange={handleOnChange} onKeyDown={handleKeyPress}/>
                            <button className='bg-gray-700 text-white ml-3 rounded p-2 bold' onClick={handleSearch}>Search</button>
                        </div>
                </div>
            </div>
                        <button className={`cursor-pointer absolute mb-0 right-6  md:bottom-[120px] rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200`}>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" class="h-4 w-4 m-1" height="1em" width="1em">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                        </button>
    </>
  )
}

export default Dashboard
