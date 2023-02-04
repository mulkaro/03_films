import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  function print_star(ind) {
    return (
      <div>
        <Star key={ind}/>
      </div>)
  }

  return (
    <div>
      <ul className="card-body-stars u-clearfix">
      {[...Array(count).keys()].map((value) => {
        return(print_star(value))
        }

      )
      }
      </ul>
    </div>
  );
}

export default Stars;
