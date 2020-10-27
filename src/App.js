import React,{useEffect, useState} from 'react'
import './App.css';

import Login from './components/Login';
import { getTokenFromResponse } from './components/spotify';
import HomePage from './components/HomePage';

function App() {

  const [token,setToken] = useState(null)
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""

    const _token = hash.access_token
    if(_token) {
      setToken(_token)
    }
    console.log ("i am a token", token)
   
  }, [token])
  return (
    <>
    <div className="App">
      {!token &&  <Login/>}
       { token  && <HomePage/>}
  
    </div>
    </>
  );
}

export default App;
