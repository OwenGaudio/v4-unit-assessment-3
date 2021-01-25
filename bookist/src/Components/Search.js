import React, { Component } from 'react';

export default class Search extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: ''
        }
      }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    handleClick(){
        this.props.filter(this.state.userInput)
    }

    handleClear(){
        this.state.userInput = ''
        this.props.clear()
    }

    render(){
        return <div>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button onClick={() => this.handleClick}>Search</button>
            <button onClick={() => this.handleClear}>Clear Search</button>
        </div>
    }
}