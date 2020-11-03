import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardBox from "./components/CardBox";
import Form from "./components/Form";
import React from "react";

const peopleUrl = "http://localhost:3000/people"
class App extends React.Component {
  state = {
    allPeople: [],
    filter: "",
    search: "",
    sort: ""
  }

  componentDidMount = () => {
    fetch(peopleUrl)
    .then(resp=>resp.json())
    .then(allPeople => this.setState({allPeople}))
  }

  addPerson = (newPerson) => {
    console.log(newPerson)
    this.setState({
      allPeople: [...this.state.allPeople, newPerson]
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <CardBox people={this.state.allPeople}/>
        <Form addPerson = {this.addPerson}/>
      </div>
    );
  }
}

export default App;
