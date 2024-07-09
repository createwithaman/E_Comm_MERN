import React, { useState } from 'react'
import "./Css/LoginSignUp.css"

function LoginSignUp() {

    const [state , setState] = useState("Login")
    const [formData , setFormData] = useState({
      username : "",
      password : "",
      email : ""
    })

    const changeHandler = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }


    const login = async(req,res)=>{
      let responseData;
      await fetch("http://localhost:8080/login",{
        method : "POST",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
          },
          body : JSON.stringify(formData)
      }).then((response)=> response.json()).then((data)=>responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token)
        window.location.replace("/")
      } 
      else {
        alert(responseData.errors)
      }
    }


    const signUp = async(req,res)=>{
      let responseData;
      await fetch("http://localhost:8080/signup",{
        method : "POST",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
          },
          body : JSON.stringify(formData)
      }).then((response)=> response.json()).then((data)=>responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token)
        window.location.replace("/")
      } 
      else {
        alert(responseData.errors)
      }


    }

  return (
    <div className='LoginSignUp'>
      <div className="LoginSignUp-container">
        <h1>{state}</h1>
        <div className="LoginSignUp-fields">
          {state==="Sign Up"?<input type="text"  name='username' value={formData.username}  onChange={changeHandler} placeholder='Your Name'/>
          :<></>}
          <input type="email" name='email' value={formData.email}  onChange={changeHandler} placeholder='Email address' />
          <input type="password" name='password' value={formData.password}  onChange={changeHandler} placeholder='password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signUp()}}>Continue</button>
        {state==="Sign Up"?
        <p className="LoginSignUp-login">Already Have an Account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="LoginSignUp-login">Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
      }
        <div className='LoginSignUp-Agree'>
          <input type="checkbox" name='' id='' />
          <p>By Continue, i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp