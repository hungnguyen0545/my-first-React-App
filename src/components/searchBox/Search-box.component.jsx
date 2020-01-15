import React, { Component } from 'react'

import './Search-box.style.css'
// use like a function
// export const SearchBox = ({placeholder,handleChange}) => {
//    return <input type="search" 
//      className ="search" 
//      placeholder= {placeholder}
//     onChange={handleChange}></input>
// }

// use like a class
class SearchBox extends Component
{
  render(){
    return <input type="search" 
     className ="search" 
     placeholder= {this.props.placeholder}
     onChange={this.props.handleChange}></input>
  }  
}
export default SearchBox