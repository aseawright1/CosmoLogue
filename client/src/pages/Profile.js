import React, { Component } from "react";
import Horoscope from "../components/Horoscope";
import SavedEvents from "../components/SavedEvents";
import ClickedEvent from "../components/ClickedEvent"

class Profile extends Component {
  // state = {
  //   name: "",
  //   horoscope: "",
  //   events: []
  // };

  // componentDidMount() {
  //   this.getName("");
  //   this.searchScope("");
  //   this.searchEvents("");
  // };

  // function getName() {

  // };

  // searchScope = query => {
  //   API.search(query)
  //     .then(res => this.setState({ image: res.data.horoscope }))
  //     .catch(err => console.log(err));
  // };

  // function searchEvents() {

  // };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Profile</h1>
          </div>
          <div className="row">
            <h4>Welcome User!</h4>
          </div>
          <div className="row">
            <div className="col s12">
              <p>Horoscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blahHoroscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blah Horoscope horoscope horoscope blah blah blah</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <ul className="collection">
                <li className="collection-item">
                  <a href="#">Lunary Event</a>
                </li>
                <li className="collection-item">
                  <a href="#">Solar Event</a>
                </li>
                <li className="collection-item">
                  <a href="#">Celestial Event</a>
                </li>
                <li className="collection-item">
                  <a href="#">Party Event</a>
                </li>
              </ul>
            </div>
            <div className="col s12 m7">
              <p>Details about clicked event Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

{/* <h4>Welcome {this.state.name}</h4> */ }

{/* <Horoscope horoscope={this.state.horoscope} /> */ }

{/* <SavedEvents events={this.state.events} /> */ }

{/* <ClickedEvent /> */ }

export default Profile;