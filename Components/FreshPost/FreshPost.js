import React,{useEffect, useState,useContext} from 'react';
import { db } from '../../firebase/config';
import Heart from '../../assets/Heart';
import "./FreshPost.css"
import { PostContext } from '../../Context/PostContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FreshPost() {
    const [products,setProducts]=useState([]);
  const history=useHistory();
  const {setPostDetails}=useContext(PostContext);

  useEffect(()=>{db.collection('products').get().then((snapshot)=>{
    const allPost=snapshot.docs.map((product)=> { return {
       
        ...product.data(),
       ids: product.id, 
      }
    })
    setProducts(allPost)
   
  })
  },[])
  return (
    <div className="recommendations">
    <div className="heading">
      <span>Fresh recommendations</span>
    </div>
    <div className="cards">

{        products.slice(0,6).map((product,index)=>{return(
<div className="card">
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image"  onClick={()=>{setPostDetails(product);;
         
         history.push("/View")}}>
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="kilometer">{product.category}</span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.dateCreated}</span>
        </div>
      </div>


)})                                   
     
}            


    </div>
  </div>
  )
}

export default FreshPost
