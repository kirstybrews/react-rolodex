import React from 'react'

class Card extends React.Component{

    render(){
        return(
            <div className="card p-2 m-2" style={{width: "18rem"}}>
                <img src={null} className="card-img-top" alt='person_first_name_and_either_alum_instructor'/>
                <div className="card-body">
                <h5 className="card-title"> person_name </h5>
                <p className="card-text"> person_insturctor_alum </p>
                <p className="card-text">Prefered Pronouns: person_pronouns </p>
                <p className="card-text">Attended Flatiron?  person_attended_flatiron </p>
                <a href={null} className="btn btn-primary"> Go to person_first_name's GitHub </a>
                </div>
             </div>
        )
    }
}

export default Card