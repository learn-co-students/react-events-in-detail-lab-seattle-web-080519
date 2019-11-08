// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    clickHandler = (event) => {
        const coordinate = [event.clientX, event.clientY];
        return this.props.onReceiveCoordinates(coordinate);
    };

    render() {
        return (
            <button onClick={(e) => this.clickHandler(e)}></button>
        );
    };
};

export default CoordinatesButton;