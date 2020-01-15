import React, { Component } from 'react'

import './time.style.css'
class Time extends Component {

    constructor(){
        super();
        this.state = {
            time : new Date().toLocaleTimeString()
        };
    }
    componentDidMount()
    {
        this.intervalID = setInterval(
            () => this.stick(), 1000
        );
    }
    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }
    stick()
    {
        this.setState({
            time : new Date().toLocaleTimeString()
        })
    }
    render()
    {
        return (
            <p className="App-clock">
                This time is {this.state.time}
            </p>
        )
    };
}

export default Time