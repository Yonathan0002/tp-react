import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:props.value};
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle() {
console.log(this.state)
        this.setState(state => ({
            //value: state.value == "+" ? "-" : "+",
            display: !state.display
        }))
    }
    render() {
        return (
            <>
            <Button onClick={this.clickHandle}>
                {this.state.display ?
                    <div>-</div>:
                    <div><em>dqfgkljm</em><b>+</b></div>
                }
            </Button>
            {this.state.display && this.props.text} 

            </>
        );
    }
}

Counter.defaultProps = {
    value: "+"
}

Counter.propTypes = {
    value: PropTypes.number,
};

export default Counter;