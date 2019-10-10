// Code CoordinatesButton Component Here
import React from 'react';


class CoordiatesButtons extends React.Component {
    
    handleClick = eventInstance => {
        this.props.onReceiveCoordinates([eventInstance.clientX, eventInstance.clientY]);
    }

    render() {
        return  <button onClick={this.handleClick}>generate coordinates</button>
    }
}

export default CoordiatesButtons;