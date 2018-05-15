import React, { Component } from 'react';
import Input from './Usuario/UserInput';
import Output from './Usuario/UserOutput';
import './App.css'

class App extends Component {
  state =  {
    pessoas: [
      {nome: "", sobrenome: ""}, 
      {nome: "", sobrenome: ""}, 
      {nome: "", sobrenome: ""}
      ]
  }
  
  enviar = () => {
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="Input">
        <Input />
        <button>enviar</button>
        
        <div className="Output">
        <Output 
        nome={this.state.pessoas[0].nome} 
        sobrenome={this.state.pessoas[0].sobrenome}
        />
        
        <Output />
        <Output />
        </div>
        
        </div>
      </div>
      );
  }
}

export default App;
