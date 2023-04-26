import React from 'react'
import Templet from '../components/Templet';
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Templet
        title="Sign In"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
