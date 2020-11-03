import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardBox from './components/CardBox';
import Form from './components/Form';
import React from 'react';

const peopleUrl = 'http://localhost:3000/people';
class App extends React.Component {
	state = {
		allPeople: [],
		filter: '',
		search: '',
		sort: '',
	};

	componentDidMount = () => {
		fetch(peopleUrl)
			.then(resp => resp.json())
			.then(allPeople => this.setState({ allPeople }));
	};

	addPerson = newPerson => {
		// console.log(newPerson)
		fetch(peopleUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(newPerson),
		})
			.then(res => res.json())
			.then(postedPerson => {
				this.setState({
					allPeople: [...this.state.allPeople, postedPerson],
				});
			});
	};

	editPerson = editedPerson => {
		console.log('Edit in APP');
		console.log(editedPerson);
		fetch(`${peopleUrl}/${editedPerson.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(editedPerson),
		})
			.then(res => res.json())
			.then(serverPerson => {
				this.setState({
					allPeople: this.state.allPeople.map(peep =>
						peep.id == serverPerson.id ? editedPerson : peep
					),
				});
			});
	};

	handleSearchChange = term => {
		let search = term.toLowerCase();
		this.setState({ search });
  };
  
  handleSortChange = value => {
    this.setState({ sort: value })
  }

  sortPeople = () => {
		let peeps = this.state.allPeople;
		switch (this.state.sort) {
			case 'Alphabetically':
				return peeps.sort((a, b) => {
					return a.name.localeCompare(b.name);
				});
			case 'None':
				return peeps;
			default:
				return peeps;
		}

    // ^^ same as vv
    
      // if(this.state.sort === 'Alphabetically'){
      //    return peeps.sort((a, b) => {
      // 		  return a.name.localeCompare(b.name);
      //    }
      // }else if(this.state.sort === 'None'){
      //   return peeps;
      // }else{
      //   return peeps;
      // }
	}

  handleFilterChange = value => {
    this.setState({filter: value})
  }

  filterPeople = () => {
    let peeps = this.sortPeople()
    switch(this.state.filter){
      case 'All':
        return peeps
      case 'Alumni':
        return peeps.filter(peep => peep['alum?'])
      case 'Instructors':
        return peeps.filter(peep => peep['instructor?']);
      default:
        return peeps
    }
  }

	render() {
		let people = this.filterPeople().filter(peep =>
			peep.name.toLowerCase().includes(this.state.search)
		);
		return (
			<div className='App'>
				<Header />
				<SearchBar
					handleSearchChange={this.handleSearchChange}
					handleSortChange={this.handleSortChange}
          sort={this.state.sort}
          handleFilterChange={this.handleFilterChange}
				/>
				<CardBox people={people} editPerson={this.editPerson} />
				<Form addPerson={this.addPerson} />
			</div>
		);
	}
}

export default App;
