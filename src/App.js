import './App.css';
import Api from './Components/Api';
import LearnMore from './Components/LearnMore';
import Footer from './Components/Footer';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
   const [card,setCard]=useState({})
  useEffect(()=>{
    //console.log(card)
    },[card] )
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <div className="container">
    <Route path = "/:title" ><LearnMore card = { card } setCard = { setCard }/></Route >
    <Route path="/" exact={true}><Api card={ card } setCard={ setCard }/></Route>
    </div>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
  }

export default App
