import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}                
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='Password' required/>

                <button>{currState === "Sign up"?"Create account":"Login"}</button>
            </div>
            
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?
                <p>Create a new account?<span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
                :
                <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup