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
    // console.log(newPerson)
    fetch(peopleUrl, {
      method: 'POST',
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body:JSON.stringify(newPerson)
    })
    .then(res=> res.json())
    .then(postedPerson => {
      this.setState({
        allPeople: [...this.state.allPeople, postedPerson]
      })
    })
  }

  editPerson = (editedPerson) => {
    console.log("Edit in APP")
    console.log(editedPerson)
    fetch(`${peopleUrl}/${editedPerson.id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body: JSON.stringify(editedPerson)
    })
    .then(res=> res.json())
    .then(serverPerson => {
      this.setState({
      allPeople: this.state.allPeople.map(peep => peep.id == serverPerson.id ? editedPerson : peep)
    })
    })
    
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <CardBox people={this.state.allPeople} editPerson = {this.editPerson}/>
        <Form addPerson = {this.addPerson}/>
      </div>
    );
  }
}

export default App;
