import e from "cors";
import React, { Component } from "react";

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: '',
        }
        this.handleForm = this.handleForm.bind(this)
        this.sendMessage= this.sendMessage.bind(this)

    }

    handleForm=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sendMessage = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="HouseForm">
        <form className="Form" onSubmit={this.sendMessage}>
          <label>Email</label>
          <input
            type="email"
            onChange={this.handleForm}
            placeholder="Enter a valid email"
          id="email"/>
          <label>Subject</label>
          <input
            type="text"
            onChange={this.handleForm}
            placeholder="Enter a Subject"
         id="subject" />
          <label>Message</label>
          <textarea
            cols="30"
            rows="10"
            onChange={this.handleForm}
            placeholder="Enter a message"
          id="message"></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }
}
