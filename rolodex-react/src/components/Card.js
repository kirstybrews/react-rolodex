import React from "react";
import CardDetails from './CardDetails'
class Card extends React.Component {
  state = {
    isClicked: false,
  };
  clickHandler = () => {
    console.log("this card was clicked");
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };
  render() {
    let { profilePicture, name, pronouns, github } = this.props.peep;
    return (
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
        {this.state.isClicked ? <CardDetails peep = {this.props.peep} /> : null}
      </div>
    );
  }
}

export default Card;
