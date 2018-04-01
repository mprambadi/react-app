import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  changeInput = e => {
    this.setState({
      term: e.target.value
    });
  };

  submitInput = e => {
    e.preventDefault();

    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div className="App">
        <InputForm
          submitInput={this.submitInput}
          term={this.state.term}
          changeInput={this.changeInput}
        />

        <List items={this.state.items} />
      </div>
    );
  }
}

const InputForm = props => {
  return (
    <form onSubmit={props.submitInput}>
      <input
        type="text"
        name="to-do"
        value={props.term}
        onChange={props.changeInput}
      />
      <input type="submit" name="send" value="input" />
    </form>
  );
};

const List = props => {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div className="App-underline" key={index}>
          {/* <p className="App-underline" > */}
            {item}
          {/* </p> */}
          </div>
        );
      })}
    </div>
  );
};

export default App;
