// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleDelayedButtonClick = (event) => {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
    }

    render() {
        return (
            <button onClick={(event) => this.handleDelayedButtonClick(event)}>
                Delayed Button
            </button>
        )
    }

}

export default DelayedButton