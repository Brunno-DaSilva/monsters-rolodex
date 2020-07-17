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

  filterMonsters = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <input
          type="search"
          placeholder="search monsters"
          onChange={this.filterMonsters}
        />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default App;
