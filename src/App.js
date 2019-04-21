import React, { Component } from 'react';
import logo from './splash.png';
import './App.css';
import Dropdown from './Dropdown';
import Button from './Button';
import InputForm from './InputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Block" id="Block">
            <div className="Row1">
              <Dropdown name="Company"></Dropdown>
            </div>
            <div className="Row2">
              <Dropdown name="Department" ></Dropdown>
              <Dropdown name="Division" ></Dropdown>
            </div>
            <div className="Button">
              {/* <Button name="Back" color="#8f8fa1"></Button> */}
              <Button name="Go" color="#3a8866" id="go-btn"></Button>
            </div>
          </div>
          
          {/* This is the fade in class */}

          <div className="Block Hidden" id="Block-hidden">
          <p>ABC Company, Department, Division</p>
            <div className="Row1">
              <InputForm width="100%"></InputForm>
            </div>
            <div className="Button">
              <Button name="Back" color="#8f8fa1" margin="200px" id="back-btn"></Button>
              <Button name="Go" color="#3a8866"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
