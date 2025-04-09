import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setSignInForm]=useState(true);
  const toggleSignInForm=()=>{
      setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg' alt="login background"/>
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' 
        className='border-2 border-black rounded-md p-2 my-4 w-full'/>}
        <input type="email" placeholder='Email' 
        className='border-2 border-black rounded-md p-2 my-4 w-full'/>
        <input type="password" placeholder='Password' 
        className='border-2 border-black rounded-md p-2 my-4 w-full'/>
        <button 
        className='bg-red-600 text-white rounded-md p-2 my-6 w-full'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>    
      </form>
    </div>
  )
}

export default Login


/*if you want to build a very big form which has 
then you can use Formik library which helps u to build
large forms is react app */
