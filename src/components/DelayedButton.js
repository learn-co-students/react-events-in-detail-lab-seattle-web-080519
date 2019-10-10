
import React, { Component } from 'react'

class DelayedButton extends Component {
    clickHandler = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (
            <button onClick={(e) => this.clickHandler(e)}>button</button>
        );
    };
}

export default DelayedButton;