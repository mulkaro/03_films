import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  //const isValidRating = count < 1 && count > 5;
  //console.log(isValidRating);
  //const countStars = [...new Array(count).fill(0)];

  function generateArray(arrlen) {
    let array=[];
    for(let i = 0; i < arrlen; i++){
      if (arrlen > i){
       array.push(1)
      }
    }
    return array  
  }

  let stars_array = generateArray(count);
{/*       {[...Array(count)].map((star,index) => {

        const value = index + 1; */}
  return (
    <div classname='allstars'>
      <ul className="card-body-stars u-clearfix">
        <div classname='rating'>
          {
            stars_array.map((value,index) => {<Star key={index} value={value}/>})
          }
        </div>
      </ul>
    </div>)
}

export default Stars;
