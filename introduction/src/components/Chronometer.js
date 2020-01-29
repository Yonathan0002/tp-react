import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import Button from "./Button";

export class Chronometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            run: false
        };
        this.tick = this.tick.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
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
            run: true
        }, () => {
            this.timerID = setInterval(this.tick, 1000);
        })
    }
    stop() {
        this.setState({
            run: false
        })
        clearInterval(this.timerID);
    }

    clickHandle() {
        console.log(this.state.run)
        if(this.state.run ){
             this.stop() ;
            } 
        else { 
            this.start();
        }
    }
    render() {
        return (
            <Button onClick={this.clickHandle}>
                {this.state.run ? this.state.time : <FontAwesomeIcon icon={faPlay} />}
            </Button>
        );
    }
}

export default Chronometer;