import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [mode, setMode] = useState("login")

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{mode === "login" ? "Login" : "Sign Up"}</h1>

        <div className="loginsignup-fields">
          {mode === "signup" && (
            <input type="text" placeholder='Your Name' />
          )}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>

        <button>
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        {mode === "login" ? (
          <p className="loginsignup-login">
            Don’t have an account?
            <span onClick={() => setMode("signup")}> Sign up</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Already have an account?
            <span onClick={() => setMode("login")}> Login</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
