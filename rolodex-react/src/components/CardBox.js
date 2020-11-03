import React from 'react'
import Card from './Card'

const CardBox = (props) =>{
    return (
        <div class="row">
        <div id ="people" className="container col-8 d-flex p-4" style={{flexWrap: 'wrap'}}>
            {/* since its the container, we want to map through the array */}
            {/* pass down data to the card components */}
            {props.people.map(peep=> {
                return(<Card peep={peep} editPerson={props.editPerson}/>)
            })}
        </div>
        </div>
    )
}

export default CardBox