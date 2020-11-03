import React from 'react'

class SearchBar extends React.Component{

    render(){
        return (
					<div>
						<label>
							<strong>Search People</strong>
							<input
								onChange={e => this.props.handleSearchChange(e.target.value)}
							/>
						</label>
						<br />
						<strong>Sort by:</strong>
						<label>
							<input
								type='radio'
								value='Alphabetically'
								checked={this.props.sort === 'Alphabetically'}
								onChange={e => this.props.handleSortChange(e.target.value)}
							/>
							Alphabetically
						</label>
						<label>
							<input
								type='radio'
								value='None'
								checked={this.props.sort === 'None'}
								onChange={e => this.props.handleSortChange(e.target.value)}
							/>
							None
						</label>
						<br />

						<label>
							<strong>Filter:</strong>
							<select onChange={e => this.props.handleFilterChange(e.target.value)}>
								<option value='All'>All</option>
								<option value='Alumni'>Alumni</option>
								<option value='Instructors'>Instructors</option>
							</select>
						</label>
					</div>
				);
    }
}

export default SearchBar