import React, { Component } from "react";
import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { Route, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount(){
    document.title = "Samuel Maltais"
  }
  render() {
    return (
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutMe" element={<AboutMe />}></Route>
            <Route path="/projectsAndInterships" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
      </div>
    );
  }
}
export default App;
