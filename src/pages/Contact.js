import { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact me!</h1>
          <h3>Name</h3>
          <input />
          <h3>Email</h3>
          <input />
          <h3>Message</h3>
          <input className="message-input" />
          <button className="nice-button">Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;
