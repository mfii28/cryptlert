import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialize AOS in useEffect
const InitializeAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Set the duration of animations
      offset: 100, // Set the offset (in pixels) from the bottom of the viewport for triggering animations
      easing: 'ease-in-out', // Set the easing option
    });
  }, []);

  return null;
};

root.render(
  <React.StrictMode>
    <InitializeAOS />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<App />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
