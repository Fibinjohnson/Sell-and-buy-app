import React from 'react';
import { SearchContext } from '../../Context/SearchContext';
import { useContext } from 'react';
import './Banner.css';
import { Dropdown } from 'react-bootstrap';
function Banner() {
  const{setStatus,setSearch}=useContext(SearchContext);
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
        <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
       All Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{setSearch("car");setStatus(false)}}>Cars</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("two wheeler");setStatus(false)}}>Two wheelers</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("Mobile Phone");setStatus(false)}}>Mobile Phones</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("Apartment");setStatus(false)}}>Apartments</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("Scooter");setStatus(false)}}>Scooters</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("Home Applience");setStatus(false)}}>Home appliences</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setSearch("Comercial goods");setStatus(false)}}>Commercial Goods</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

         

          
        </div>
        <div className="banner">
          <img
            src="../../../images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
