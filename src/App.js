import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from './component/List'
import List2 from './component/List2'
import Button from './component/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleInput(e) {
    e.preventDefault();

    if(!this.state.text){
      return 
    }


    const newData = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState({
      text: " ",
      items: [...this.state.items, newData]
    });
  }
  render() {
    return (
      <div className="App">
      <List2 items={this.state.items}/>
        <form onSubmit={this.handleInput}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button> Add #{this.state.items.length + 1}</button>
          <Button text="Colek" style="btn btn-primary"/>
          <Button text="Dong 1" style="btn btn-danger"/>
          <Button text="Dong 2" style="btn btn-info"/>
          <Button text="Dong 3" style="btn btn-warning"/>
          <Button text="Dong 4"/>
          <Button text="Dong 5"/>
          <Button text="Dong 6"/>
        </form>
        <List items={this.state.items}/>
        <ButtonLoop />
      </div>
    );
  }
}

const ButtonLoop = () => { 
let angka = [0,1,2,3,4,5,6,7,8,9,10]
  return (
    angka.map((ang)=>{
      return <Button text={ang}/>
    })
    
  )
}

export default App;
