import React, { Component } from 'react';

export default class Sort extends Component {

  constructor (props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  //gets value from select dropdown and passes it as an argument to the sort func on App.js
  handleChange(event){
    this.props.sort(event.target.value);
  }

  render(){
    return (
      <div>
        <select id="sort" onChange={this.handleChange}>
          <option value="featured">Featured</option>
          <option value="az">A-Z</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    );
  }
}

