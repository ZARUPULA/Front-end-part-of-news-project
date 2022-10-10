import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Thetruth from './pages/Thetruth';
import News from './pages/News';
import Film from './pages/film';
import Sports from './pages/sports';
import India from './pages/india';
import Lifestyle from './pages/lifestyle';
import Editorial from './pages/editorial';
import Payment from './pages/Payment';


  
function App() {
  
  return (
    <div className="page-container">
      <div className="content-wrap">
    
    <Router>
      <Navbar />
      
      
      
      
      <Routes>
         <Route index element={<Home/>} /> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/thetruth' element={<Thetruth/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/film' element={<Film/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/india' element={<India/>} />
        <Route path='/lifestyle' element={<Lifestyle/>} />
        <Route path='/editorial' element={<Editorial/>} />
        <Route path='/Payment' element={<Payment/>} />
        
        
      </Routes>
    </Router>
    </div>
      <Footer />
    </div>
    
  );
}
  
export default App;
