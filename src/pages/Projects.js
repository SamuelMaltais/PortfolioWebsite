import { Component } from "react";
import "./Projects.css"
import McGillComponent from "./components/McGill"
import Hackathons from "./components/Hackathons"

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <McGillComponent />
        <Hackathons />
      </div>
    )
  }
}

export default Projects;
