import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <div className="form-container p-5 mx-auto col-4">
            <h3>Add yourself to our Alum and Instructors!</h3>
            <a className="btn btn-primary" data-toggle="collapse" href="#person-form" role="button" aria-expanded="false" aria-controls="collapseFormButton">Add a new person!</a>
            <form id='person-form' className="collapse multi-collapse">
                <br/>
                <div className="form-group">
                <label for="Name">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameInput"/>
                </div>
                <div className="form-group">
                    <label for="Selecting Pronouns">Pronouns</label>
                    <select className="custom-select mr-sm-2" id="pronouns">
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
                    <select className="custom-select mr-sm-2" id="alum">
                    <option selected>Alum?</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="Instructor?">Is this person an instructor?</label>
                    <select className="custom-select mr-sm-2" id="instructor">
                    <option selected>Instructor?</option>
                    <option value="true">yes</option>
                    <option value="false">no</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="GitHub">GitHub</label>
                    <input type="text" className="form-control" id="github" aria-describedby="gitHubinput"/>
                </div>
                <div className="form-group">
                    <label for="Profile Picture URL">Profile Picture URL</label>
                    <input type="text" className="form-control" id="profile" aria-describedby="profilePictureInput"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

export default Form