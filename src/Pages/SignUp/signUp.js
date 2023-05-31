import React from 'react'
import { Link } from 'react-router-dom';
import './signUp.css';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
export  function SignUp() {
  return (
    
        <div className="logo">
            {/* <img src="./TwitterImg.png" className="logo-box"/> */}

            <span className='icons'><BsTwitter/></span>
            <h2 className="heading">Join Twitter today</h2>


           <button className='google-btn'><FcGoogle/>Sign in with Google</button>

           <button className='apple-btn'><BsApple/>Sign in with Apple</button>
            
           
            <hr></hr>
            <span>or</span>
            
            <Link to="/Createaccount">
           <div>
            <button>Create account</button>
            </div>
            </Link>
            
       
            <p>By signing up, you agree to the <Link>Terms of Service</Link>and <Link>Privacy Policy</Link>, including <Link>Cookie Use</Link>.</p>
         

            <p>Have an account already?<Link to="/login">Log in</Link></p>

        </div>
    
  )
}
