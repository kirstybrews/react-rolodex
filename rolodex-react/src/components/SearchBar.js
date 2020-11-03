import React from 'react'

class SearchBar extends React.Component{

    render(){
        return(
            <div>
      <label>
        <strong>Search People</strong>
        <input onChange={null} />
      </label>
      <br />
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="None" checked={null} onChange={null} />
        None
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="All">All</option>
          <option value="Students">Students</option>
          <option value="Alumni">Alumni</option>
          <option value="Instructors">Instructors</option>
        </select>
      </label>
    </div>
        )
    }
}

export default SearchBar