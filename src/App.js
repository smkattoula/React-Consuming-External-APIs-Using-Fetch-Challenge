import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            ipAddress: '23.156.128.4',
            region: ""
        }
    }

    getLocation = () => {

        fetch(`https://ipapi.co/${this.state.ipAddress}/json/`).then(response => {return response.json()}).then((payload) => {
            this.setState({ region: payload.region}) })
    }

    handleChange = (event) => {

        let { ipAddress } = this.state
        ipAddress = event.target.value
        this.setState({ ipAddress: ipAddress })

    }

    render() {

        return (
            <div className="App"><br/>
                Hello sir Austin
                Why hello ser Shaker
                <br/>

                <input  onChange={ this.handleChange }/>
                <button onClick={ this.getLocation }>Submit IP</button>
                <br/><br/><br/>
                <h3>{ this.state.region }</h3>

            </div>
    )}
}
