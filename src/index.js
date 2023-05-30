import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Firebasecontext } from './Context/context';
import firebase from "./firebase/config";
import { AuthContextProvider } from './Context/context';

ReactDOM.render(
<Firebasecontext.Provider value={{firebase}}> 
<AuthContextProvider>   <App /></AuthContextProvider>
</Firebasecontext.Provider>



, document.getElementById('root'));
