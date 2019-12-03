import React, { Component } from 'react'

class AddClient extends Component {
  state = {
    name: null,
    owner: null,
    location: null,
    openingTime: null,
    menu:null
  }

  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addClient(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="owner">Owner:</label>
          <input type="text" id="owner" onChange={this.handleChange} />
          <label htmlFor="location">Location:</label>
          <input type="text"id="location" onChange={this.handleChange} />
          <label htmlFor="openingTime">Opening Time:</label>
          <input type="text"id="openingTime" onChange={this.handleChange} />
          <label htmlFor="menu">Menu:</label>
          <input type="text"id="menu" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddClient;