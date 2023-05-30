import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Firebasecontext } from '../../Context/context';
import {useHistory} from "react-router-dom";

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(Firebasecontext);
  const history=useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>history.push("/")).catch((e)=>alert(e.message))
    

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://cdn.w600.comps.canstockphoto.com/buy-sell-stamp-image_csp14970272.jpg"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{history.push("/signup")}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
