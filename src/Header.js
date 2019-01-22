import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.submitInput = props.submitInput;
    this.state = {
      value: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.submitInput(this.state.value);
    this.setState({
      value: ""
    });
  };

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div className="Header">
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChange}
            placeholder="enter number"
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Header;
