import React from 'react'
import Card from './Card'

const CardBox = (props) =>{
    return (
        <div class="row">
        <div id ="people" className="container col-8 d-flex p-4" style={{flexWrap: 'wrap'}}>
            <Card/>
        </div>
        </div>
    )
}

export default CardBox