import React, {Component} from 'react' ;
import FormatResults from './FormatResults' ;

class Results extends Component {
	render(){
		const {theResults} = this.props;
		const resultArray = theResults.map((items,i)=>{
			return <FormatResults name= {theResults[i].name} link= {theResults[i].url} />
		})
		return (
			<div>
				{resultArray}
			</div>
		)
	}
}

export default Results;