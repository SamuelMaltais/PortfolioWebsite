import React, { Component } from "react";
import Restaurant from "./components/Images/restaurant.jpg"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return(
    <div className="about-me-container">
      <h1>About me</h1> 
      <div className="about-me-story">
        <h2>Restauration and my passion for cooking</h2>
        <p>Working hard to provide for my studies, I worked for more
          than 2 years in restauration. Having to balance work and studies, I became very
          efficient with my time. I pride myself in my ability for execution, efficiency 
        </p>
      <img src={Restaurant} height={450} width={800}></img>
      </div>
      <div className="about-me-story">
        <h2>Costumer service and my communication skills</h2>
        <p>Working at a grocery store and a public pool, I learned to quickly
          connect with strangers. I was at Metro grocery store the one responsible
          to handle complaints and sell charity products and special services on occation.
          I consider myself to be an excellent salesman, and I hope you think the same, since this
          entire website is dedicated to selling myself.
        </p>
      </div>
    </div>
  )}
}

export default AboutMe;
