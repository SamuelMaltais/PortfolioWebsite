import { Component } from "react";
import "./Home.css";
import Side_hand from "./components/Images/side_hand.png"
import Other_hand from "./components/Images/other_hand.png"

class Home extends Component {
  render() {
    return (
      <div className="home-container">
      <h1 className="home-title">Welcome to my portfolio website !</h1>
        <div className="skill-container">
        <input type="checkbox" class="hand-checkbox" id="menu-trigger2"/>
        <label for="menu-trigger2" class="hand-checkbox-trigger menuBtn1" role="button"></label>
        <img src={Side_hand} className="right-hand"></img>
        <img src={Other_hand} className="left-hand"></img>
        </div>
      </div>
    );
  }
}

export default Home;
