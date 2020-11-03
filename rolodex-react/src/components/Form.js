import React from 'react'

class Form extends React.Component{
    state = {
        name: "",
        pronouns: "",
        alum: false,
        instructor: false,
        github: "",
        profilePicture: ""
    }

    handleChange = (e) => {
        // console.log('oh somethings changing')
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        // console.log('this form be submitted ', this.state)
        let {name, pronouns, alum, instructor, github, profilePicture} = this.state
        let newPerson = {
            name,
            pronouns,
            'alum?': alum,
            'instructor?': instructor,
            github,
            profilePicture
        }
        this.props.addPerson(newPerson)
        // console.log(newPerson)

    }

    
    render(){
        return(
            <div className="form-container p-5 mx-auto col-4">
            <h3>Add yourself to our Alum and Instructors!</h3>
            <a className="btn btn-primary" data-toggle="collapse" href="#person-form" role="button" aria-expanded="false" aria-controls="collapseFormButton">Add a new person!</a>
            <form id='person-form' className="collapse multi-collapse" onSubmit={this.handleSubmit}>
                <br/>
                <div className="form-group">
                <label for="Name">Name</label>
                <input type="text" className="form-control" name= "name"id="name" aria-describedby="nameInput" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="Selecting Pronouns">Pronouns</label>
                    <select className="custom-select mr-sm-2" name="pronouns" onChange={this.handleChange}>
                    <option selected>Pronouns</option>
                    <option value="she/her">she/her</option>
                    <option value="he/him">he/him</option>
                    <option value="they/them">they/them</option>
                    <option value="he/they">he/they</option>
                    <option value="she/they">she/they</option>
                    <option value="ze/zher/zhim">ze/zher/zhim</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="Alum?">Is this person an alum?</label>
                    <select className="custom-select mr-sm-2" name="alum" onChange={this.handleChange}>
                    <option selected>Alum?</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="Instructor?">Is this person an instructor?</label>
                    <select className="custom-select mr-sm-2" name="instructor" onChange={this.handleChange}>
                    <option selected>Instructor?</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="GitHub">GitHub</label>
                    <input type="text" className="form-control" name="github" aria-describedby="gitHubinput" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label for="Profile Picture URL">Profile Picture URL</label>
                    <input type="text" className="form-control" name="profilePicture" aria-describedby="profilePictureInput" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
        )
    }
}

export default Form