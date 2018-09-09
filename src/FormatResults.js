import React, {Component} from 'react' ; 

class FormatResults extends Component{
	render(){
		const {name,url} = this.props;
		const link = 'https://www.starwars.com/search?q=';
		return (
			<div id = "body">
				<a href ={link+name} ><h2> {name} </h2></a>
			</div>
		)
	}
}

export default FormatResults; 

