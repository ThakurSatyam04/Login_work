import React from 'react'
import Templet from '../components/Templet';
import loginImg from '../assets/login.png';
import Logo from '../assets/Logo1.jpg.jpg'
import LogoImg from '../assets/Logo2.svg.svg'

const Login = ({setIsLoggedIn}) => {
  return (
    
    <div className='w-screen h-screen flex items-center justify-center relative'>
      <div className="bg-white w-fit absolute top-2 left-2"> 
        <img src={LogoImg} className="w-[40px]" />
      </div>
      <Templet
        title="Sign In"
        image={Logo}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
