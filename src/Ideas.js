
import React from 'react';
import './Ideas.css';

const Ideas = (props) => {
  return (
    <h2>Hello, {[props.name, props.title]}!</h2>
  )
}

export default Ideas;