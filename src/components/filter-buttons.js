import React from 'react';
import {Button} from 'react-bootstrap';

export default function FilterButtons(props) {
  return (
    <div>
      <p> FilterButtons </p>
<Button onClick={props.first_name} > Sort by name </Button>
<Button onClick={props.last_name} > Sort by surname </Button>
<Button onClick={props.gender} > Sort by gender </Button>
<Button onClick={props.age} > Sort by age </Button>
<Button onClick={props.grade} > Sort by grade </Button>
<Button onClick={props.reset} > Reset </Button>
    </div>
  )
}


