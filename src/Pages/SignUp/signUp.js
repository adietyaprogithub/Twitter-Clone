import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Styles from './signUp.module.css';
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
export  function SignUp() {

  const navigate = useNavigate();
  return (
    
        <div className={Styles.logo}>
            {/* <img src="./TwitterImg.png" className="logo-box"/> */}

            <span className={Styles.icons}><BsTwitter color='royalblue' size={40}/></span>
            <h2 className={Styles.heading}>Join Twitter today</h2>


           <button className={Styles.google_btn}><FcGoogle/>Sign in with Google</button>

           <button className={Styles.apple_btn}><BsApple/>Sign in with Apple</button>
            
           
            <hr></hr>
            <span>or</span>
            
            <Link onClick={navigate("/Createaccount")}>
           <div>
            <button style={{listStyle:"none"}}>Create account</button>
            </div>
            </Link>
            
       
            <p>By signing up, you agree to the <Link>Terms of Service</Link>and <Link>Privacy Policy</Link>, including <Link>Cookie Use</Link>.</p>
         

            <p>Have an account already?<Link to="/login">Log in</Link></p>

        </div>
    
  )
}
