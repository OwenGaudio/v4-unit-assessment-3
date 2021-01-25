import React, { Component } from 'react';

export default class Shelf extends Component {
    render(){
        const mappedTitles = this.props.shelf.map(item =>{
            return <div>
                <h1>{item}</h1>
            </div>
        }) 

        return <div>
            <h1>Shelf</h1>
            <button onClick={() => this.props.clearShelf()}>Clear Shelf</button>
            <h2>{mappedTitles}</h2>
        </div>
    }
}