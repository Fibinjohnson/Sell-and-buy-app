import React from 'react';
import { useState ,useContext } from 'react';

import './Signup.css';
import { Firebasecontext } from '../../Context/context';
import {useHistory} from "react-router-dom"
import { db } from '../../firebase/config';



export default function Signup() {
  const [name ,setName]=useState('');
  const [phone,setPhnone]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(Firebasecontext)
  const history=useHistory();
 

   const  handleSubmit=(e)=>{
    e.preventDefault()
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .then((result)=>{result.user.updateProfile({displayName:name})
     .then(()=>{db.collection("users")
     .add({id:result.user.uid,
      username:name,
      phoneNo:phone ,
      password :password
    })
    .then(()=>history.push("/login"))
    }) 
    }).catch((error)=>alert(error.message))
  }
    
 return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="https://cdn.w600.comps.canstockphoto.com/buy-sell-stamp-image_csp14970272.jpg"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={phone}
            onChange={(e=>setPhnone(e.target.value))}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e=>setPassword(e.target.value))}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{history.push("/login")}}>Login</a>
      </div>
    </div>
  );

}