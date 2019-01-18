import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/400")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    if (!this.state.data) {
      return <h1>LOADING BRUH</h1>;
    } else {
      return (
        <div>
          <h1>Pokedex for {this.state.data.name}</h1>
          <img src={this.state.data.sprites.front_default} alt="" />
          <div>
            {this.state.data.abilities.map((ability, i) => {
              return <p key={i}>{ability.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;
