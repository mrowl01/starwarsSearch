import React, {Component} from 'react' ; 
import './FormatResults.css';

class FormatResults extends Component{
	render(){
		const {name,url,backgroundImage} = this.props;
		const link = 'https://www.starwars.com/search?q=';
		return (
			<div style = {{backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover' }}
			className = "body tc br1 pa5 ma2 b--solid  grow dib bw1 ">
				<a href ={link+name} ><h2 style = {{background:'black', color:'white' }}> {name} </h2></a>
			</div>
		)
	}
}

export default FormatResults; 

