import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      input: ""
    };
  }

  submitInput = stringNumber => {
    this.setState({
      input: stringNumber
    });
  };

  getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.input)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data, input: "" });
      });
  };

  render() {
    if (this.state.input) {
      console.log("getting pokemon: " + this.state.input);
      this.getData();
    }
    if (!this.state.data) {
      return (
        <div className="App">
          <Header submitInput={this.submitInput} />
          <h1>PICK A POKEMON BRUH</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header submitInput={this.submitInput} />
          <h1>Pokedex for {this.state.data.name}</h1>
          <img src={this.state.data.sprites.front_shiny} alt="" />
          <div>
            {this.state.data.abilities.map((item, i) => {
              return (
                <p
                  key={i}
                  style={{ backgroundColor: item.is_hidden ? "red" : "white" }}
                >
                  {item.ability.name}
                </p>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;
