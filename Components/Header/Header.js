import React from 'react';
import './Header.css';
import Search from '../../assets/Search';
import { useContext } from 'react';
import { AuthContext ,Firebasecontext } from '../../Context/context';
import {useHistory} from "react-router-dom"
import {  Button } from 'react-bootstrap';
import { useState } from 'react';
import { SearchContext } from '../../Context/SearchContext';

function Header() {
  const {user}=useContext(AuthContext);
  const {firebase}=useContext(Firebasecontext);
  const history=useHistory();
  const [search,setSearch1]=useState('')

  const {setStatus,setSearch}=useContext(SearchContext)

 
  
   
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
         <h1>Buy-Sell</h1>
        </div>
        
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              onChange={(e)=>{setSearch1((e.target.value))}} value={search}
            />
          </div>
          <div  onClick={()=>{setSearch(search);setStatus(false);}}  className="searchAction">
            <Search  color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          
        </div>
        <div className="loginPage">
          <span className='user'>{user ? user.displayName:"login"}</span>
          <hr />
        </div>
       { user&&<span className='logout' onClick={()=>{firebase.auth().signOut();(history.push("/login"))}}>logout</span>}

        
        
          
          <div className="sellMenuContent">
          <Button variant="secondary" className='rounded-pill' onClick={()=>{history.push("/Create")}}><b>SELL</b></Button>
            
          </div>
       
      </div>
    </div>
  );
}

export default Header;
