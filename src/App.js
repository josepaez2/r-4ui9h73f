import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    texto: ""
  }
  handler = ({target}) => {
    const {name, value} = target
    this.setState({[name]: value})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text"  name="texto" placeholder="Empieza a escribir algo" onChange={this.handler}/>
        <p className="repeater">{this.state.texto}</p>
      </div>
    );
  }
}

export default App;
