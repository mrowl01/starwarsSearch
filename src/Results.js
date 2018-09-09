import React, {Component} from 'react' ;
import FormatResults from './FormatResults' ;
import {backimages} from './backimages.js';

class Results extends Component {

	render(){
		const randomImageGen = () =>{
			let max = (backimages.length) ; 
			let min = 0; 
			console.log('max', max)
			return Math.floor(Math.random()*(max));
		}
		const {theResults} = this.props;
		const resultArray = theResults.map((items,i)=>{
			return <FormatResults key={theResults[i].name} name= {theResults[i].name} 
			link= {theResults[i].url} backgroundImage = {backimages[randomImageGen()].url} />
		})
		return (
			<div>
				{console.log(randomImageGen())}
				{resultArray}
			</div>
		)
	}
}

export default Results;