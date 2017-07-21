import React from 'react';
import { Button } from 'react-bootstrap';

export default function FilterControls(props) {
    return (
        <div>
            {
                props.buttons.map((button, index) =>
                    button.label === 'reset' ?
                        <Button key={index}
                            onClick={button.handleClick}
                            bsStyle={button.activeFilterName === button.label ? 'danger' : 'info'}
                        >{button.label}
                        </Button> :
                        <Button
                            key={index}
                            onClick={button.handleClick}
                            bsStyle={button.activeFilterName === button.label ? 'danger' : 'info'}
                        >Sort by {button.label}
                        </Button>
                )
            }
        </div>
    )
}