import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ListEmployeeComponent} /> 
        <Route path="/add" component={CreateEmployeeComponent} />
        <Route path="/update/:id" component={UpdateEmployeeComponent} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
