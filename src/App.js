import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Math from './pages/Calc';
import Quote from './pages/Quote';
import Home from './pages/Home';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Math />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </>
);

export default App;
