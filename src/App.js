import logo from "./logo.svg";
import "./App.css";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Gallery from "./components/pages/Gallery";
import Footer from "./components/Footer/Footer";
import Booking from "./components/pages/Booking";
import Youtube from "./components/pages/Youtube";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>

    <Router>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/youtube' element={<Youtube/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </Router>

    </div>
  );
}

export default App;
