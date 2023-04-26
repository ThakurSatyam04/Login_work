import React from 'react'
import Templet from '../components/Templet'
import signupImg from '../assets/signup.png'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Templet
      title="Sign Up"
      image = {signupImg}
      formtype = "signup"
      setIsLoggedIn = {setIsLoggedIn}    
      />
    </div>
  )
}

export default SignUp
