import React from 'react';

const Users = function(props){
  return (
    <div>
      <h3>Users</h3>
      <div className="row">
        {
          props.users.map((user, i) => {
          let priority = user.priority;
          //to determine background color based on priority, using in-line styling
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
            <div key={ i } className="col-md-4" >
              <div className="single-user" key={user.name} style={{backgroundColor: color}}>
                <h2>{user.name}</h2>
                <p id="age">{user.age}</p>
                <p id="category">{user.category}</p>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Users;
