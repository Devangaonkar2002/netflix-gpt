import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
const Login = () => {
  const[isSignInForm,setSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  
  const dispatch=useDispatch();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=() =>{
    
   const message= checkValidData(email.current.value,password.current.value);
   setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR
    }).then(() => { 
      const {uid, email,displayName} = auth.currentUser;
              dispatch(addUser({
                uid:uid,email:email,displayName:displayName
              }));
      
    }).catch((error) => {
     setErrorMessage(error.message);
    });
    
  
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  }
  const toggleSignInForm=()=>{
      setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={LOGO} alt="login background"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
       className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' 
        className='border-2 border-black rounded-md p-2 my-4 w-full text-black'/>}
        <input ref={email} type="email" placeholder='Email' 
        className='border-2 border-black rounded-md p-2 my-4 w-full text-black'/>
        <input ref={password} type="password" placeholder='Password' 
        className='border-2 border-black rounded-md p-2 my-4 w-full text-black'/>
        <p className='text-red-500 font-bold text-lg py-'>{errorMessage}</p>
        <button 
        className='bg-red-600 text-white rounded-md p-2 my-6 w-full' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>    
      </form>
    </div>
  )
}

export default Login


/*if you want to build a very big form which has 
then you can use Formik library which helps u to build
large forms is react app */
