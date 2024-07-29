import React, { Fragment } from 'react'
import './Navbar.css'
import { Link, } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Create from './Create';
import Edit from './Edit'

function Navbar() {


  return (
  <Fragment >
   <div>
    <h1><span style={{color:'red'}}>L</span>ogo</h1>
    <nav>
        <Link id="link" to="/dashboard" >Home</Link>
        <Link id="link" to="/deatils">Employee List</Link>
        <Link id="link">Hukum Gupta</Link>
        <Link id="link" to='/'>Logout</Link>
    </nav>
    </div>
    <Routes>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
  
  
   
  </Fragment>
  )
}

export default Navbar