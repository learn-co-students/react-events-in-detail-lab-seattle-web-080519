import React from 'react';

class CoordinatesButton extends React.Component {
    handleEvent = event => {this.props.onReceiveCoordinates([event.clientX, event.clientY])};

    render() {
        return(
            <button onClick={this.handleEvent}/>
        )
    }
}
export default CoordinatesButton;