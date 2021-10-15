//import { useState, useEffect} from 'react'
//import './App.css';
//import axios from 'axios'
import Api from './Components/Api';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
  <Navbar/>
  <Switch>
  <Route path="/" exact component={Api}/>
  </Switch>
  
  </Router>
 
   ) 
  }

export default App
