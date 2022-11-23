import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './components/Footer';
import Home from './components/home/Home';
import Impressum from './components/Impressum/Impressum';
import Datenschutz from './components/datenschutz/Datenschutz';
import HomeEng from './components/home/HomeEng';

function App() {

  const [footerSticky, setFooterSticky] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home setFooterSticky={setFooterSticky}/> } />
          <Route path="/eng" element={ <HomeEng setFooterSticky={setFooterSticky}/> } />
          <Route path="impressum" element={ <Impressum setFooterSticky={setFooterSticky}/> } />
          <Route path="datenschutz" element={ <Datenschutz setFooterSticky={setFooterSticky}/> } />
        </Routes>
        <Footer isSticky={footerSticky}/>
      </div>
    </Router>
    
  );
}

export default App;
