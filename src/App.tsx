import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Footer from './modules/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about-me' element={<AboutMe />}/>
      {/* <Route path='/projects' element={<Projects />}/> */}
    </Routes>
    </div>
    </Router>
  );
}

export default App;