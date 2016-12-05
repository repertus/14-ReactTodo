import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoTable from './components/TodoTable';

class App extends Component {
  render() {
    return (
         <div className="wrapper">
              <header className="App-header">
                   <h1 className="App-h1">My To Do List</h1>
              </header>
              <div className="container">
                   <TodoForm />
                   <TodoTable />
              </div>
              <div className="App-push" />
              <div className="App-footer">
                   <Footer />
              </div>
         </div>
    );
  }
}



export default App;
