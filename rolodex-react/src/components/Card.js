import React from "react";
import CardDetails from "./CardDetails";
import Form from "./Form"
class Card extends React.Component {
  state = {
    isClicked: false,
    showForm: false
  };
  clickHandler = () => {
    console.log("this card was clicked");
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  showForm = () =>{
    this.setState({
        showForm: true
    })
  }

  editPerson = (editedPersonObj) => {
      console.log("I'm an edited submit function ?????")
    //   console.log(editedPersonObj)
        editedPersonObj.id = this.props.peep.id
      this.props.editPerson(editedPersonObj)

      this.setState({
          showForm: false
      })
  }
  
  render() {
    let { profilePicture, name, pronouns, github } = this.props.peep;
    return (
      <>
        <div
          onClick={this.clickHandler}
          className="card p-2 m-2"
          style={{ width: "18rem" }}
        >
          <img
            src={profilePicture}
            className="card-img-top"
            alt="person_first_name_and_either_alum_instructor"
          />

          {this.state.isClicked ? <CardDetails peep={this.props.peep} /> : null}
          {this.state.showForm ? <Form addPerson={this.editPerson}/> : null}
        </div>
        <a href={null} className="btn btn-primary" onClick={this.showForm}>
          Edit?
        </a>
      </>
    );
  }
}

export default Card;
