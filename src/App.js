import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
         <div className="wrapper">
              <header className="App-header">
                   <h1 className="App-h1">My To Do List</h1>
              </header>
              <div className="container">
                   <Form />
              </div>
              <div className="App-push"></div>
              <div className="App-footer">
                   <Footer />
              </div>
         </div>
    );
  }
}



export default App;
