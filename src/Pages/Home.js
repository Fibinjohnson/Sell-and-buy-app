import React  from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import FreshPost from '../Components/FreshPost/FreshPost';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Searchbar from '../Components/SearchBar/Searchbar';
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

function Home() {
  const{status,setStatus,searchValue}=useContext(SearchContext);
  if(searchValue===""){
    setStatus(true)
  }
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      {status?<Posts />:<Searchbar/>}
      <FreshPost/>
      <Footer />
    </div>
  );
}

export default Home;
 
