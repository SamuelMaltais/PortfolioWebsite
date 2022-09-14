import { Component } from "react";
import "./Contact.css";
import axios from "axios"
class Contact extends Component {
  state = {
    message : "",
    email: "",
    subject: "",
    awnser: ""
  };
  postEmail = () =>{
    if(this.state.email.includes('@'
    ) & this.state.email.includes('.'))
    {
      this.setState({awnser: ""})
      axios.post("http://localhost:6969/", {
      message: this.state.message,
      email: this.state.email,
      subject: this.state.subject
    }).then((res) => {
      this.setState({awnser: res.data})
    }).catch((err) => console.log("err"))
  }
    else{
      this.setState({awnser: "Invalid email"})
    }
  }
  render(){
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h2>{this.state.awnser}</h2>
          <h1>Contact me!</h1>
          <h3>Email</h3>
          <input onChange={(e) => {
            this.setState({email: e.target.value})
          }}/>
          <h3>Subject</h3>
          <input onChange={(e) =>{
            this.setState({subject: e.target.value})
          }}/>
          <h3>Message</h3>
          <input className="message-input" onChange={(e) =>{
            this.setState({message: e.target.value})
          }}/>
          <button className="nice-button" onClick={() => {this.postEmail()}}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;
