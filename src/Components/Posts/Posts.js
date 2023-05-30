import React,{useEffect, useState,useContext} from 'react';
import { db } from '../../firebase/config';
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../Context/PostContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Posts() {
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
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

        {products.map((product)=>
        
        {return( <div
            className="card" onClick={()=>{setPostDetails(product);
             
              history.push("/View")}}
              
          >
         
            <div className="favorite">
              <Heart></Heart>
            </div>
             <div className="image">
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
           
          </div>)
         
        })
        
        }
         
        </div>
      </div>
    
    </div>
  );
}

export default Posts;
