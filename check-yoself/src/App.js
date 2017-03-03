import React, { Component } from 'react';
import './App.css';

// import LogIn from './LogIn';
import NavBar from './NavBar'

// import {Button} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';


class App extends Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     setState: "active"
  //   }
  // }

  render() {
    return (

      <div className="App">
        <Jumbotron>
          <h1>Check Yo Self 🤳</h1><br />
          <h3>Your personal Thought Distillery.</h3>
        </Jumbotron>
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
