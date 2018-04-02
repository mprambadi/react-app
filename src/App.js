import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {items:[], text:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
 
  handleInput(e){
    e.preventDefault()

    if(!this.state.text){
      return
    }

    const newData = {
      text: this.state.text,
      id: Date.now()
    }

    this.setState({
      items: [...this.state.items, newData],
      text: ' '
    })
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }


  render() {
    console.log(this.state.items)
    return (
      <div className="App">

        <form onSubmit={this.handleInput}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <button> Add #{this.state.items.length + 1}</button>
        </form>

        <List items={this.state.items}/>
      </div>
    );
  }
}

const List = (props) => { return (<ul>
      {props.items.map((item)=>{
        return <li key={item.id}> {item.text} </li>
      })}
    </ul>
)
}
  


export default App;
