import React, { useState } from "react";
import './App.css';
import Header from './Components/Header.js'
import Booklist from './Components/Booklist.js'
import Shelf from './Components/Shelf.js'
import Search from './Components/Search.js'
import data from './data.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.resetBooks = this.resetBooks.bind(this);

    this.state = {
      books: data,
      shelf: []
    }
}

  addToShelf(title){
    this.setState({
      shelf: [...this.state.shelf, title]
    })
  }

  clearShelf(){
    this.setState({
      shelf: []
    })
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter(function(e){
      return (e.title.includes(input) || e.author.includes(input))
    });

    this.setState({
      books: filteredBooks
    })
  }

  resetBooks(){
    this.setState({
      books: data
    })
  }


  render(){
    return(
     <div className="App">
        <Header/>
        <Search filter={this.filterBooks} clear={this.resetBooks}/>
        <Booklist books={this.state.books} clickImage={this.addToShelf}/>
        <Shelf shelf ={this.state.shelf} clearShelf={this.clearShelf}/>
     </div>
    );
  }
}

export default App;
