import './App.css';
import Api from './Components/Api';
//import LearnMore from './Components/LearnMore';
import Footer from './Components/Footer';
//import {useState, useEffect} from 'react'
import {BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  // const [card,setCard]=useState({})
  //  useEffect(()=>{
  //  console.log(card)
  //   },[card] )
  return (
    <>
    <Router>
      <Switch>
    <Navbar/>
    <div className="container">
    <Api/>
    {/* <Route path ="/:title" exact><LearnMore card={card} setCard={setCard}/></Route> */}
    </div>
    <Footer/>
    </Switch>
    </Router>
    </>
  );
  }

export default App
