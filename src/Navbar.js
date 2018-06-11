import React, { Component } from 'react';

export default class Navbar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      users: this.props.users,
      checked: null
    };
    this.whichSort = this.whichSort.bind(this);
    this.sortFeatured = this.sortFeatured.bind(this);
    this.sorter = this.sorter.bind(this);
    this.filter = this.filter.bind(this);
  };

  whichSort(event) {
    switch (event.target.value) {
      case 'featured':
          this.sortFeatured();
          break;
      case 'az':
          this.sorter('name');
          break;
      case 'priority':
          this.sorter('priority');
          break;
      default:
          break;
    }
  }

  sortFeatured(){
    let users = this.props.users;
    console.log('sort featured ran');
    this.setState({users});
  };

  sorter(sortingBy){
    let usersCopy = this.props.users.map(user => user); //to prevent props from being mutated
    console.log('users copy', usersCopy)
    let users = usersCopy.sort(function(a, b) {
      console.log('sortingBy', sortingBy)
      let A;
      let B;
      if (sortingBy === 'name') {
        A = a.name.toUpperCase(); // case-insensitive
        B = b.name.toUpperCase(); // case-insensitive
      }
      if(sortingBy === 'priority'){
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
    console.log('sort AZ ran');
    this.setState({users})
  }

  filter(event, cat){
    let users = this.props.users.filter((user) => user.category === cat);
    console.log(users);
    console.log('filter ran');
    this.setState({users})
    this.setState({checked: event.target.value});
  }

  render () {

    console.log('PROPS', this.props.users);
    console.log('STATE', this.state.users);

    const categoryList = [...new Set(this.props.users.map(user => user.category))].sort();

    return (
      <div>
        <select id="sort" onChange={this.whichSort} >
          <option value="featured">Featured</option>
          <option value="az">A-Z</option>
          <option value="priority">Priority</option>
        </select>


        <div>
          <p>Filter</p>
          <div>
            {
              categoryList.map(category => (
                <div key={category}>
                  <input type="radio"
                    onClick={(event) => this.filter(event, category)}
                    value={ category }
                    checked={this.state.checked === category}
                  /> { category }
                </div>
              ))
            }
          </div>
        </div>

      </div>
    );
  }
}

