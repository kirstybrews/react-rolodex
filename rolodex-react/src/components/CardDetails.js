import React from 'react'


const CardDetails = (props) => {
    let {name, pronouns, github} = props.peep
    return(
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text">
            {" "}
            Instructor? : {props.peep["instructor?"] ? "YES" : "no"}{" "}
          </p>
          <p className="card-text">Prefered Pronouns: {pronouns} </p>
          <p className="card-text">
            Attended Flatiron? {props.peep["alum?"] ? "YES" : "no"}{" "}
          </p>
          <a href={github} className="btn btn-primary">
            {" "}
            Go to {name.split(" ")[0]}'s GitHub{" "}
          </a>
        </div>
    )
}

export default CardDetails