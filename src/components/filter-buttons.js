import React from 'react';
import {Button} from 'react-bootstrap';

export default function FilterButtons(props) {
  return (
    <div>
      <p> FilterButtons </p>
<Button onClick={props.gender} > Sort by gender </Button>
<Button onClick={props.reset} > Reset </Button>
    </div>
  )
}


