import React from 'react';

class DelayedButton extends React.Component {

    handleEvent = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)
                }, this.props.delay);
        };

    render() {
        return(
            <button onClick={this.handleEvent}/>
        )
    }
};
export default DelayedButton;