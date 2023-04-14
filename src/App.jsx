import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Glasses from "./components/pages/Glasses";
import Sunglasses from "./components/pages/Sunglasses"
import Tests from "./components/pages/Tests";

export default function App() {

  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="glasses" element={<Glasses />} />
          <Route path="sunglasses" element={<Sunglasses />} />
          <Route path="tests" element={<Tests />} />
          {/* <Route path="contacts" element={<Contacts />} /> */}
        </Routes>
      </Router>
    
  );
}
