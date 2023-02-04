import React from 'react';
import Star from './Star';
//import shortid from 'shortid';

function Stars (count) {
  for (let i=0; i<count; i++) {
    return (<Star key={i+1}/>)
  }
}

export default Stars;
