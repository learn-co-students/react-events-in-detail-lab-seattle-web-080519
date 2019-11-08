// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    // constructor() {
    //     super();
    //     this.state = { x: 0, y: 0 };
    // }

    logCoordinates = (event) => {
        // console.log(event.screenX);
        // this.setState({ x: event.screenX, y: event.screenY }, () => { 
        //     console.log(this.state);
        //     this.props.onReceiveCoordinates(this.state);
        // });
        const coordinArray = [event.screenX, event.screenY];
        this.props.onReceiveCoordinates(coordinArray);
    }

    render() {
        return (
            <button onClick={this.logCoordinates}>Coordinates Button</button>
        )

    }


}

export default CoordinatesButton