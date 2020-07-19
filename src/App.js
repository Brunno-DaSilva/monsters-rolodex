import React, { Component } from "react";
import CardList from "./Components/CardList/CardList.jsx";
import SearchBox from "./Components/SearchBox/SearchBox";

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
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.filterMonsters}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
