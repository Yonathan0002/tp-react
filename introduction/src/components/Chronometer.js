import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

export class Chronometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.start();
    }
    componentWillUnmount() {
        this.stop();
    }
    tick() {
        this.setState(state => ({
            time: parseInt((new Date() - this.startDate)/1000)
        }));
    }
    start() {
        this.startDate = new Date();
        this.setState({
            time: 0,
        }, () => {
            this.timerID = setInterval(() => this.tick(), 1000);
        })
    }
    stop() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <Button label={this.state.time} onClick={this.clickHandle}></Button>
        );
    }
}