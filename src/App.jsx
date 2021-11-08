import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ListEmployeeComponent/>} /> 
        <Route path="/add" element={<CreateEmployeeComponent/>} />
        <Route path="/update/:id" element={<UpdateEmployeeComponent/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
