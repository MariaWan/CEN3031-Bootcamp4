import React from 'react';

class AddBuilding extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error: ''
		}
	}
	
	isAdding(){
		this.props.isAdding(!this.props.addition)
	}
	
	addBuilding(){
		if(this.code.value ==='' || this.name.value ==='' )
			this.setState({
				error: 'Code and Name are required'
			})
		else{
			this.setState({
				error: ''
			})	
			var list = {
				code: this.code.value.toUpperCase(),
				name: this.name.value
			}
			if(this.address.value !=='')
				list.address = this.address.value
			if(this.latitude.value !== '' && this.longitude.value!=='')
				list.coordinates={
					latitude: this.latitude.value,
					longitude: this.longitude.value
				}
			this.props.addBuilding(list)
			this.isAdding()
		}
	}
		render() {
		const { addition } = this.props
		if (addition) {
			return (
				<div>
					<h4>Add A Building</h4>
					<p className= "error">{this.state.error}</p>
					<form className="addBuilding">
						<table>
							<tr>
								<p className= "addLabel">
									Code:
								</p>
								<td className= "addInfo">
									<input type="text" placeholder = "Code" ref={value => this.code = value}/>
								</td>
							</tr> 
							<tr>
								<p className= "addLabel">
									Name:
								</p>
								<td className= "addInfo">
									<input type="text" placeholder = "Name" ref={value => this.name = value}/>
								</td>
							</tr>
							<tr>
								<p className= "addLabel">
									Latitude:
								</p>
								<td className= "addInfo">
									<input type="text" placeholder = "Latitude" ref={value => this.latitude = value}/>
								</td>
							</tr>
							<tr>
								<p className= "addLabel">
									Longitude:
								</p>
								<td className= "addInfo">
									<input type="text" placeholder = "Longitude" ref={value => this.longitude = value}/>
								</td>
							</tr>
							<tr>
								<p className= "addLabel">
									Address:
								</p>
								<td className= "addInfo">
									<input type="text" placeholder = "Address" ref={value => this.address = value}/>
								</td>
							</tr>
						</table>
					</form>
					<button onClick={this.addBuilding.bind(this)}>Add Building</button>
				</div>
			);
		}
		return(<button onClick={this.isAdding.bind(this)}>Add A Building</button>)
	}
		
		
	
	
	
	
}

export default AddBuilding