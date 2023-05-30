import React, { useContext ,useEffect } from 'react';
import './App.css';
import { Route,BrowserRouter,Switch } from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Login from "./Components/Login/Login"
import Home from './Pages/Home';
import Create from './Components/Create/Create';
import { AuthContext ,Firebasecontext } from './Context/context';
import View from './Components/View/View';
import Post from './Context/PostContext';
import Search from './Context/SearchContext';



function App() {
  const {user,setUser}=useContext(AuthContext)
  const{firebase}=useContext(Firebasecontext)
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{setUser(user)
})
  })
  return (
    <div> 
    
    <BrowserRouter>
    <Search>
    <Post>
    <Switch>
   
          <Route exact path="/"><Home /></Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/Login"><Login/></Route>
          <Route path="/Create"><Create/></Route>
          <Route path="/View"><View/></Route>
   
          
    </Switch>
    </Post>
    </Search>
   
    </BrowserRouter>
    
   
   
    </div>
  );
}

export default App;
