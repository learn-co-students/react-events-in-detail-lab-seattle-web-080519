// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
    
    handleClick = eventInstance => {
        eventInstance.persist();
        setTimeout( () => {
            console.log("INSIDE TIMEOUT");
            this.props.onDelayedClick(eventInstance);
          }, this.props.delay);
        };

    render() {
        return <button onClick={this.handleClick}> Delayed Click</button>
    }
}