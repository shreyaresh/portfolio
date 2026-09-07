import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Cursor from './modules/Cursor';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
    <div className="App">
      <Cursor />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about-me' element={<AboutMe />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;