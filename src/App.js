import React, { Component } from "react";
import CardList from "./Components/CardList/CardList.jsx";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    this.getMonsters();
  }

  getMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  };

  render() {
    const { monsters, searchField } = this.state;
    return (
      <>
        <input type="search" placeholder="search monsters" onChange={} />
        <CardList monsters={this.state.monsters} />
      </>
    );
  }
}

export default App;
