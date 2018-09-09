import React, {Component} from 'react' ;

class SearchBar extends Component {
	render(){
		return(
			<div>
				<form onSubmit = {this.props.search} >
					<input style={{marginBottom:'50px'}} onChange = {this.props.change} type ="search" id="search" placeholder="Search StarWars World"></input>
					
				</form>
			</div>
		)
	}
}

export default SearchBar ; 