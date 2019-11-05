import React from 'react';

class RemoveBuilding extends React.Component{
	removal(){
		this.props.removal()
	}
	render(){
		return(
		<div className = "details">
		<button onClick= {this.removal.bind(this)}>
			Remove this Building
		</button>
		</div>
		);
	}
}
export default RemoveBuilding