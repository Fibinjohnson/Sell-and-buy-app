import React, { Fragment ,useContext, useEffect} from 'react';
import { db } from '../../firebase/config';
import { PostContext } from '../../Context/PostContext';
import Header from '../Header/Header';
import './View.css';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




function View() {
    const {postDetails,setPostDetails}=useContext(PostContext);
    const [userDetails,setUserDetails]=useState('');
  
    
    
    

   
  useEffect(() => {
   
    if (postDetails && postDetails.id) {
      console.log("postDetails.id:", postDetails.id);
      db.collection("users")
        .where('id', '==', postDetails.id)
        .get()
        .then((res) => {console.log("Query results:", res);
        if (res.empty) {
          console.log("No documents found.");
        } else {
          res.forEach((doc) => {
            console.log("Inside forEach loop");
            setUserDetails(doc.data());
            console.log(doc.data());
          });
        }
        })
        .catch((error) => {
          console.error("Error retrieving user details:", error);
        });
    }
  }, [postDetails]);



  useEffect(() => {
    if (postDetails) {
      const postDetailsString = JSON.stringify(postDetails);
      localStorage.setItem('MY_APP_STATE', postDetailsString);
    }
  }, [postDetails]);

  useEffect(() => {
    const data = localStorage.getItem("MY_APP_STATE");
    if (data) {
      const parsedData = JSON.parse(data);
      setPostDetails(parsedData);
      
    }
  }, []);

  
  

  
  return (<Fragment>
     <Header/>
    <div className="viewParentDiv">
     {postDetails &&  <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>}
      <div className="rightSection">
       {postDetails &&<div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.dateCreated}</span>
        </div>}
        {userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phoneNo}</p>
        </div>}
      </div>
    </div>
  </Fragment>
   
  );
}
export default View;
