import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Footer from "./pages/Footer";
import './style/header.scss';
import './style/footer.scss';
import "./style/Banner.scss";
import "./style/Card.scss";
import "./style/Global.scss";
import "./style/Collapse.scss";
import "./style/NotFound.scss";
import "./style/Carousel.scss";
import "./style/Home.scss";


function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;