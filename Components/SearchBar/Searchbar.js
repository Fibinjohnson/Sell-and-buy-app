import React,{useEffect, useState,useContext} from 'react';
import { db } from '../../firebase/config';
import Heart from '../../assets/Heart';
import './SearchBar.css'
import { PostContext } from '../../Context/PostContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { SearchContext } from '../../Context/SearchContext';

function Searchbar() {
    const [products,setProducts]=useState([]);
    const history=useHistory();
    const {postDetails,setPostDetails}=useContext(PostContext);
    
    const {setStatus,searchValue}=useContext(SearchContext);
  
    useEffect(()=>{db.collection('products').get().then((snapshot)=>{
      const allPost=snapshot.docs.map((product)=> { return {
         
          ...product.data(),
         ids: product.id, 
        }
      }).filter((product)=>product.category.toLowerCase()===searchValue.toLowerCase() ||product.name.toLowerCase()===searchValue.toLowerCase())
      setProducts(allPost)
      console.log(allPost)
    })
    },[searchValue])
  

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Here is Results for "{searchValue}"</span>
          <span onClick={()=>setStatus(true)}>View all</span>
          
        </div>
        <div className="cards">

        {products.map((product)=>
        
        {return( <div
            className="card" onClick={()=>{setPostDetails(product); console.log(product);
             
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
  )
}

export default Searchbar
