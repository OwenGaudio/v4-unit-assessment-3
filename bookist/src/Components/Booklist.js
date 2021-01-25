import React, { Component } from 'react';

export default class Booklist extends React.Component {
    render(){
    const mappedBooks = this.props.books.map(item =>{
        return <div>
            <button><img src={item.img} onClick={() => this.props.clickImage(item.title)}/></button>
            <h1>{item.title}</h1>
            <h2>{item.author}</h2>
        </div>
    }) 
        return <div>
            <h1>List</h1>
            <h2>{mappedBooks}</h2>
        </div>
    }
}