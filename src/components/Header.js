import React,{ useEffect } from 'react'
import {  signOut ,onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {  useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import {logo} from "../utils/constant.js";

const Header = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
             dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
             navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          
        }
      });
      //UNSUBSCRIBE WHEN COMPONENT DEMOUNTE
      return()=>unsubscribe();
},[]);
  return (
    <div className='absolute z-10 w-screen bg-gradient-to-b from-black flex justify-between'><img className='w-44 px-2 py-2 ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt ="logo" />
    {user && <div className='flex justify-between'><img 
    className='w-12 h-12 pt-4 p-2'
    alt="usericon" 
    src={logo}/>
    <button className='bg-red-600 text-white h-12 rounded-lg m-2 p-2'onClick={handleSignOut}>Sign out</button>
    </div>}
    </div>
  )
}

export default Header