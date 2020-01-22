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
        this.setState(state => ({
            value: state.value+1
        }))
    }
    render() {
        return (
            <Button label={this.state.value} onClick={this.clickHandle}></Button>
        );
    }
}

Counter.defaultProps = {
    value: 0
}

Counter.propTypes = {
    value: PropTypes.number,
};

export default Counter;