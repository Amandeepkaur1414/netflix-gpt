import React, { useState ,useRef} from 'react'
import Header from '../Header';
import {checkValidData} from "../../utils/validate.js";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../../utils/firebase.js";
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice.js'
import {avtar,backgroundLogo} from '../../utils/constant.js';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn,setIsSignIn]=useState(true);
    const [errorMessgae,setErrorMessgae] =useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    

    const handleButtonClick =(event)=>{
        event.preventDefault();
        //validate form data
        const messgae = checkValidData(email.current.value,password.current.value);
        setErrorMessgae(messgae);

        if(messgae)
        return;
        //SignIn /SingUp
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: {avtar}
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                   
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessgae(error.errorCode +"-"+error.errorMessage);
                    // ...
                  });
              
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessgae(errorCode +"-"+errorMessage);
                // ..
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessgae(errorCode +"-"+errorMessage);
            });
        }
    };
    const toggleSignInForm =()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute '>
             <img src ={backgroundLogo}/>
        </div>
        <div className='absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80' >
        <form>
            <h1 className='text-3xl font-bold m-2' > {isSignIn ? "Sign In":"Sign Up"}</h1>
           { !isSignIn && <input type='text' ref={name} placeholder='Name' className='p-4 m-4 w-full bg-gray-700'/>}
            <input type='text' placeholder='Email' ref={email} className='p-4 m-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' ref = {password} className='p-4 m-4 w-full  bg-gray-700'/>
            <p className='text-red-700 font-semibold ml-4'>{errorMessgae}</p>
            <button className='p-4 m-4 bg-red-700 w-full font-semibold rounded-lg' onClick={handleButtonClick}>{isSignIn ? "Sign In":"Sign Up"}</button>
            <p  className='p-4 m-4 w-full font-semibold cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now":"Alredy registered? Sign In Now"}</p>
        </form>
        </div>
        
       
    </div>
  )
}

export default Login;