import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  function print_star() {
    return (
      <div>
        <Star />
      </div>)
  }

  return (
    <div>
      <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map((value,index) => {
        return(print_star())
        }
      )
      }
      </ul>
    </div>
  );
}

export default Stars;
