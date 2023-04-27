import React from 'react'
import Templet from '../components/Templet'
import Logo from '../assets/Logo1.jpg.jpg'
import LogoImg from '../assets/Logo2.svg.svg'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
       <div className="bg-white w-fit absolute top-2 left-2"> 
        <img src={LogoImg} className="w-[40px]" />
      </div>
      <Templet
      title="Sign Up"
      image = {Logo}
      formtype = "signup"
      setIsLoggedIn = {setIsLoggedIn}    
      />
    </div>
  )
}

export default SignUp
