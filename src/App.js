//import { useState, useEffect} from 'react'
import './App.css';
//import axios from 'axios'
import Api from './Components/Api';
import Footer from './Components/Footer';
/*import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';*/
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Api/>
    </div>
    <Footer/>
    </>
  );
  }

export default App
