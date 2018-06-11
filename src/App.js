import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './Users.js';
import Sort from './Sort.js'
import Filter from './Filter.js';


const data = [
  {
    "name": "Joe",
    "age": 24,
    "priority": 1,
    "category": "cat2"
  }, {
    "name": "Jane",
    "age": 76,
    "priority": 4,
    "category": "cat1"
  }, {
    "name": "Kevin",
    "age": 32,
    "priority": 2,
    "category": "cat2"
  }, {
    "name": "Lucy",
    "age": 54,
    "priority": 1,
    "category": "cat3"
  }, {
    "name": "Colin",
    "age": 34,
    "priority": 3,
    "category": "cat1"
  }, {
    "name": "Franny",
    "age": 36,
    "priority": 2,
    "category": "cat3"
  }, {
    "name": "Neil",
    "age": 74,
    "priority": 4,
    "category": "cat2"
  }, {
    "name": "Katy",
    "age": 55,
    "priority": 3,
    "category": "cat2"
  }
]

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      users: data,
      checked: ''
    };
    this.sorter = this.sorter.bind(this);
    this.catFilter = this.catFilter.bind(this);
  }

  sorter(sortingBy){
    if (sortingBy === 'featured'){
      this.setState({users: data}); //display original data
      return;
    }
    let usersCopy = this.state.users.map(user => user); //to prevent props from being mutated
    let users = usersCopy.sort(function(a, b) {
      let A;
      let B;
      if (sortingBy === 'az') { // compare names
        A = a.name.toUpperCase(); // case-insensitive
        B = b.name.toUpperCase(); // case-insensitive
      }
      if(sortingBy === 'priority'){ // compare priority levels
        A = a.priority;
        B = b.priority;
      }
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      // if equal
      return 0;
    });
    this.setState({users})
  }

  catFilter (event, cat){
    let users = this.state.users.filter((user) => user.category === cat);
    this.setState({
      users,
      checked: event.target.value
    });
  }

  render () {
    console.log(this.state.users)
    return (
      <div>
        <Sort sort={this.sorter} users={this.state.users}/>
        <Filter catFilter={this.catFilter} users={this.state.users}/>
        <Users users={this.state.users}/>
      </div>
    );
  }
}


