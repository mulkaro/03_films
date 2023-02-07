import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  function print_star(ind) {
    const stars_arr = [];
    for (let i = 0; i < 5; i++) {
      stars_arr.push(Star(i));
    }
    //[...Array(count).fill()].map((_,idx) => <li key={idx}><Star /></li>);

    return (stars_arr)
  }

  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        {print_star(count)}
      </ul>
    </div>
  );
}

export default Stars;
