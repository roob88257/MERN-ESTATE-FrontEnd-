import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ImSpinner8 } from "react-icons/im";
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Signin() {

   const [formInput,setFormInput]=useState({}); 
   const [isLoading,setIsLoading]=useState(false);
   

   const navigate =useNavigate();

   const formChangeHandler=(e)=>{

   // console.log(e.target.name);
   // console.log(e.target.value);
   // const field=e.target.name;
   // const value=e.target.value;

   setFormInput(formInput => ({
    ...formInput,  // Spread the existing properties
    [e.target.name]: e.target.value,  // Update or add new properties
  }));

 

   }

   const formSubmitHandler=(e)=>{

    e.preventDefault();
    setIsLoading(true);

    // console.log(formInput);
    axios.post('http://localhost:5000/api/auth/signin', formInput , {
        headers: {
          'Content-Type': 'application/json'
          // Add other headers as needed
        }
      })
        .then(response => {
            toast.success("Signed in successfully");
            
            setTimeout(()=>{
              navigate('/');
          },1500);
        })
        .catch(error => {
          toast.error(error.message);
        });
    

        

  setIsLoading(false); 
 
  
 // window.location.reload()
   }

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>
        <form onSubmit={formSubmitHandler} className='flex flex-col gap-4 '>
        <input onChange={formChangeHandler} type="text" name="email" placeholder="Email" className='border p-3 rounded-lg focus:outline-slate-300'/>
        <input onChange={formChangeHandler} type="text" name="password" placeholder="Password" className='border p-3 rounded-lg focus:outline-slate-300'/>
        <button type="submit" disabled={isLoading} className='bg-[#334155] p-3 rounded-md text-white hover:bg-slate-600 disabled:opacity-80'>{isLoading ? 'isLoading...' : 'SIGN IN' }</button>
        <Toaster/>    
        </form> 
        <div className='flex flex-row gap-2 mt-4'>
            <p>
              Dont have an account?
            </p>
            <Link to='\'><div  className='text-blue-600 hover:cursor-pointer hover:text-blue-400'>Sign Up</div></Link>
        </div>  
       
    </div>
    
  )
}

export default Signin