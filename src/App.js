import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormatResults from './FormatResults'; 
import SearchBar from './SearchBar';
import Results from './Results'; 

class App extends Component {
  constructor(){
    super()
    this.state = {
      results:[]
    }
  }

  onSearch =(event)=>{
     
  }

  onChange = (event) => {
      const searchAPI = async(searchTerm)=>
      {
        const request = await fetch(`https://swapi.co/api/people/?search=${event.target.value}`);
        const starData = await request.json() ; 
        return starData.results ; 
      }
    searchAPI().then(result=>{
      this.setState({results:result});
    });
    
  }
  render() {
    return (
      <div>
        <div id="body">
          <h1 > Search StarWars Info </h1>
          <p>Enter your search terms below</p>
          <SearchBar change = {this.onChange} search= {this.onSearch} ></SearchBar>
          <Results theResults = {this.state.results}></Results>
        </div>
      </div>

    );
  }
}

export default App;
