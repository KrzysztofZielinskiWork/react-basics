import React from 'react';
import { Button } from 'react-bootstrap';

export default function FilterControls(props) {
    return (
        <div>
            {
                props.buttons.map((button, index) =>
                    <Button key={index} onClick={button.handleClick}>Sort By {button.label}</Button>
                )
            }
        </div>
    )
}