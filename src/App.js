import React, { Component } from "react";
import "./App.css";

window.id = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  changeInput = e => {
    this.setState({
      term: e.target.value
    });
  };

  submitInput = e => {
    e.preventDefault();
    const data = {
      text: this.state.term,
      id: window.id++
    }
    this.setState({
      term: "",
      items: [...this.state.items, data]
    });
  };

  handleRemove(name) {
    const remain = this.state.items.filter(el => el.id !== name);

    this.setState({
      items: remain
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>To do Input Form </h1>
            <InputForm
              submitInput={this.submitInput}
              term={this.state.term}
              changeInput={this.changeInput}
            />
          </div>

          <div className="col-md-7">
            <List items={this.state.items} handleRemove={this.handleRemove} />
          </div>
        </div>
      </div>
    );
  }
}

const InputForm = props => {
  return (
    <form onSubmit={props.submitInput}>
      <div className="form-group">
        <input
          type="text"
          name="to-do"
          value={props.term}
          onChange={props.changeInput}
          className="form-control"
          placeholder="input to do"
        />
      </div>

      <input
        type="submit"
        name="send"
        value="input"
        className="btn btn-primary"
      />
    </form>
  );
};

const List = props => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div
            className="card"
            key={item.id}
            onClick={() => props.handleRemove(item.id)}
          >
            <div className="card-body">
              <h5 className="card-title">{item.text}</h5>
              <div className="btn btn-primary">Delete</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
