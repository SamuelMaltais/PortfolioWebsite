import { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  state = {
    message : "",
    email: "",
    subject: ""
  };
  postEmail = () =>{
    fetch("http://localhost:6969/",{
      method: "POST",
      body: {
        message:this.state.message,
        email: this.state.email,
        subject: this.state.subject
      },
      mode:"cors"
    }).then((res) => {
      console.log(res)
    })
  }
  render(){
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact me!</h1>
          <h3>Name</h3>
          <input onChange={(e) => {
            this.setState({message: e.target.value})
          }}/>
          <h3>Subject</h3>
          <input />
          <h3>Message</h3>
          <input className="message-input" />
          <button className="nice-button" onClick={() => {this.postEmail()}}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;
