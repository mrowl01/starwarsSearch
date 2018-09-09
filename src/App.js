import React, { Component } from 'react';
import './App.css';
import FormatResults from './FormatResults'; 
import SearchBar from './SearchBar';
import Results from './Results'; 
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

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
      
      <div className = 'container tc'>
        <div className = '6rem'>
          <h1  > StarWars Info </h1>
        </div>
          <p>Enter your search terms below</p>
          <SearchBar change = {this.onChange} search= {this.onSearch} ></SearchBar>
          <Scroll>
            <ErrorBoundary>
              <Results theResults = {this.state.results}></Results>
            </ErrorBoundary>
          </Scroll>
      </div>
    );
  }
}

export default App;
