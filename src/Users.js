import React, { Component } from 'react';
// import Grid from 'react-bootstrap/lib/Grid';
import { Button } from 'react-bootstrap';

export default class Users extends Component {

  constructor (props) {
    super(props);
    this.state = {
      users: this.props.users
    };
    this.sortFeatured = this.sortFeatured.bind(this);
    this.sortAZ = this.sortAZ.bind(this);
    this.sortPriority = this.sortPriority.bind(this);
    this.filter = this.filter.bind(this);
  };

  sortFeatured(){
    let users = this.props.users;
    console.log('sort featured ran');
    this.setState({users});
  };

  //this function changes this.props.users. FIX THIS
  sortAZ(){
    let users = this.props.users.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // if names are equal
      return 0;
    });
    console.log('sort AZ ran');
    this.setState({users})
  };

  sortPriority(){
    let p1 = this.props.users.filter((user) => user.priority === 1);
    let p2 = this.props.users.filter((user) => user.priority === 2);
    let p3 = this.props.users.filter((user) => user.priority === 3);
    let p4 = this.props.users.filter((user) => user.priority === 4);
    let users = p1.concat(p2, p3, p4);
    console.log('sort Priority ran');
    this.setState({users})
  };

  filter(cat){
    let users = this.props.users.filter((user) => user.category === cat);
    console.log(users);
    console.log('filter ran');
    this.setState({users})
  }

  render () {

    console.log('PROPS', this.props.users);
    console.log('STATE', this.state.users);

    const categoryList = [...new Set(this.props.users.map(user => user.category))].sort();

    console.log('component re-rendered')

    return (
      <div>
        <div>
          <p>Sort</p>
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.sortFeatured}>Featured</Button>
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.sortAZ}>A-Z</Button>
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.sortPriority}>Priority</Button>
        </div>
        <div>
          <p>Filter</p>

          {/*category buttons, not hard-coded. buttons don't render*/}

{/*          <div>
            {
              categoryList.map(category => {
                <div>
                <Button bsStyle="primary" bsSize="xsmall" onClick={() => this.filter(category)}>category</Button>
                console.log('catName', category);
                </div>
              })
            }
          </div>*/}

          <Button bsStyle="primary" bsSize="xsmall" onClick={() => this.filter('cat1')}>Filter: Cat1</Button>
          <Button bsStyle="primary" bsSize="xsmall" onClick={() => this.filter('cat2')}>Filter: Cat2</Button>
          <Button bsStyle="primary" bsSize="xsmall" onClick={() => this.filter('cat3')}>Filter: Cat3</Button>
        </div>
        <h3>Users</h3>
        <div className="row">
          {
            this.state.users.map(user => {
              let priority = user.priority;
              let color;
              switch (priority) {
                  case 1:
                      color = "orange";
                      break;
                  case 2:
                      color = "green";
                      break;
                  case 3:
                      color = "blue";
                      break;
                  case 4:
                      color = "purple";
                      break;
                  default:
                      color = "grey";
              }
              return (
                <div className="col-xs-4" className="single-user" key={user.name} style={{backgroundColor: color}}>
                  <h2>{user.name}</h2>
                  <p id="age">{user.age}</p>
                  <p id="category">{user.category}</p>
                  <p>{user.priority}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

{/*<Button bsStyle="primary" bsSize="xsmall" onClick={this.showForm}>ADD NEW INSTRUMENT</Button>*/}

  // return (
  //   <div>
  //     <h3>Albums</h3>
  //     <div className="row">
  //       {
  //         albums.map(album => (
  //           <div className="col-xs-4" key={ album.id }>
  //             <Link className="thumbnail" to={`/albums/${album.id}`}>
  //               <img src={ album.imageUrl } />
  //               <div className="caption">
  //                 <h5>
  //                   <span>{ album.name }</span>
  //                 </h5>
  //                 <small>{ album.songs.length } songs</small>
  //               </div>
  //             </Link>
  //           </div>
  //         ))
  //       }
  //     </div>
  //   </div>
  // );
