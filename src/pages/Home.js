import { Component } from "react";
import "./Home.css";
import SkillGraph from "./components/SkillGraph";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home-title">Welcome to my portfolio website !</h1>
        <SkillGraph />
      </div>
    );
  }
}

export default Home;
