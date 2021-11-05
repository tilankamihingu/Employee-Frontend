import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ListEmployeeComponent/>} /> 
        <Route path="/add" element={<ListEmployeeComponent/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
