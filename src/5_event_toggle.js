import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_is: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggle_is: !state.toggle_is,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggle_is ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
