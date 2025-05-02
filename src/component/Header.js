import {  onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store) => store.user);
  const handleSignOut = () => {
    
  signOut(auth).then(() => {
   
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email,displayName} = user;
        dispatch(addUser({
          uid:uid,email:email,displayName:displayName
        }));
        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
       navigate("/");
       
      }
    });
  }, []);

  return (
    <div className="flex justify-between items-center absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
      
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      
      {user && (<div className="flex items-center gap-4">
        <img
          className=" account-logo w-10 h-10 rounded-md border border-white"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="Profile"
        />
        <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Sign Out
        </button>
      </div> )}
    </div>
  );
};

export default Header;
