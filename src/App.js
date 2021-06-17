import logo from "./logo.svg";
import "./App.css";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Gallery from "./components/pages/Gallery";
import Footer from "./components/Footer/Footer";


function App() {
  return (
   <div>

    <Router>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
