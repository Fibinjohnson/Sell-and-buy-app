import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { useContext } from 'react';
import { Firebasecontext ,AuthContext } from '../../Context/context';
import { storage } from '../../firebase/config';
import { db } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name,setName]=useState('');
  const[price,setPrice]=useState('');
  const[image, setImage]=useState(null);
  const [category,setCategory]=useState('');
  const {user}=useContext(AuthContext);
  const date =new Date();
  const history=useHistory();

  const handleClick=(e)=>{
    e.preventDefault();
    image && storage.ref(`/images/${image.name}`).put(image)
    .then(({ref})=>{ref.getDownloadURL().then((url)=>
    db.collection('products').add({
    name,
    category,
    price,
    dateCreated:date.toDateString(),
    id:user.uid ,
     url}), history.push('/'))})
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              value={name}
              onChange={(e=>{setName(e.target.value)})}
              className="input"
              type="text"
              id="fname"
              name="Name"
             
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}

           
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input  value={price} onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):null}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
            <br />
            <button onClick={handleClick} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
