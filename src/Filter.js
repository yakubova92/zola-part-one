import React from 'react';

const Filter = function (props) {

    //map creates an array of cats, set finds unique cats, sort alphabetizes cats
    const categoryList = [...new Set(props.users.map(user => user.category))].sort();

    return (

      <div>
        <p>Filter</p>
        <div>
          {
            categoryList.map(category => (
              <div key={category}>
                <input type="radio"
                  onClick={(event) => props.catFilter(event, category)}
                  value={ category }
                  checked={props.checked === category}
                /> { category }
              </div>
            ))
          }
        </div>
      </div>

    );
}

export default Filter;
