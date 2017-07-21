import React from 'react';
import { Button } from 'react-bootstrap';
import FilterControls from './filter-controls';

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

      <FilterControls
        buttons={[
          {
            handleClick: props.first_name,
            label: 'first_name',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
          {
            handleClick: props.last_name,
            label: 'last_name',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
          {
            handleClick: props.gender,
            label: 'gender',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
          {
            handleClick: props.age,
            label: 'age',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
          {
            handleClick: props.grade,
            label: 'grade',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
          {
            handleClick: props.reset,
            label: 'reset',
            activeFilterName: props.activeFilterName,
            filter: props.filter
          },
        ]
        }
      />
    </div>
  )
}


