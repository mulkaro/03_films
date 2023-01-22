import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  //const isValidRating = count < 1 && count > 5;
  //console.log(isValidRating);
  //const countStars = [...new Array(count).fill(0)];

  return (
    <div>
      {[...Array(count)].map((star,index) => {
        const value = index + 1;
        return (
          <ul className="card-body-stars u-clearfix">
            <Star key={index} value={value}/>
          </ul>)
        }
      )}
    </div>
  );
}
export default Stars;
