import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state={
    output:[
      {name:'Noopur', age:'24'},
      {name:'Shalini', age:'25'},
      {name:'Kartikey', age:'26'}
    ]
  }

  changeUserOutput=()=>{
    this.setState({
      output:[
      {name:'Noopur Srivastava', age:'24'},
      {name:'Shalini Srivastava', age:'25'},
      {name:'Kumar Kartikey', age:'26'}
    ]})
  }

  onChangeEvent=(event)=>{
    this.setState({
      output:[
      {name: event.target.value, age:'24'},
      {name:'Shalini Srivastava', age:'25'},
      {name:'Kumar Kartikey', age:'26'}
    ]})
  }
  render() {
    const style={
      border: '1px solid blue',
      padding: '8px',
      margin: '16px auto',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <p><h3>Welcome to the Assignment 1</h3></p>
        <UserInput changed={this.onChangeEvent}/>
        <button style={style} onClick={this.changeUserOutput}>Change Output</button>
        <UserOutput name={this.state.output[0].name} age ={this.state.output[0].age}/>
        <UserOutput name={this.state.output[1].name} age ={this.state.output[1].age}/>
        <UserOutput name={this.state.output[2].name} age ={this.state.output[2].age}/>
      </div>
    );
  }
}

export default App;
