import React from 'react'
import './App.css';
import Login from './components/login/Login';

import Main from './components/main/Main';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import admins from './data'


function App() {

  console.log(admins)
  const [adminData,setAdminData]=useState(admins)
  const [login,setLogin]=useState(false)

  return (
    
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={login===true?<Main data={adminData.admins} comp='dash' setLogin={setLogin}/>:<Login data={adminData.admins} setLogin={setLogin}/>}/>
              
              
           
              
            

          </Routes>

        
        </div>

      </Router>
      
      
    
  );
}

export default App;
