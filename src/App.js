import React,{Component} from 'react';

import {CardList} from './components/card-list/Card-list.component'//function

import SearchBox from './components/searchBox/Search-box.component'// class

import Time from './components/time/Time.component'

//import Commment from './components/comment/Comment.component'

import './App.css';

class App extends Component
{
  constructor()// first function run when class excute
  {
    super();// call constructor method on the component class
    this.state = {// state like js object --> this.state is object of App class : stored prop-var of 
      // this class
      monsters : [],
      SearchField : ''
    };
  }
  componentDidMount(){ // get data from API
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users =>  this.setState({monsters : users}))
    }
  render()
  {
    const {monsters, SearchField } = this.state;
    const filterMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(SearchField.toLowerCase())
    ); 
    return(
      <div className="App">
      <h1> My first React App</h1>
        <SearchBox
        placeholder = "Search Monster"
        handleChange = {e => this.setState({SearchField : e.target.value})} ></SearchBox> 
        <Time></Time>
        <CardList monsters={filterMonsters} >
        </CardList>
     </div>
    )
  }
}

export default App;
