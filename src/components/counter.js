import React from 'react';
import {Button} from 'react-bootstrap';

class Counter extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        counter: 9,
        other: 3
    }
}
    render() {
        return (
    <div>
        <p> value: {this.state.counter}</p>
        <p> value: {this.state.other}</p>
        <Button bsStyle="info">Increment</Button>
        <Button bsStyle="danger">Decrement</Button>
        <Button bsStyle="warning">Reset</Button>        
    </div>

    )}
}


export default Counter;