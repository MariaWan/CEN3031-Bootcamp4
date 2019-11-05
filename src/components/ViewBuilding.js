import React from 'react';
import RemoveBuilding from './RemoveBuilding';


class ViewBuilding extends React.Component {
	render() {
		const { lists, selectedBuilding, removal} = this.props;
		var finding = lists.find(list =>{
			return list.id===selectedBuilding
		})
		
		if(!finding)
			return(
				<div className="view">
				<h5></h5>
					<p className = "details">
					{' '}
					<i>Click on a name to view more information</i>
					</p>
				</div>
			)
		
		return (
		<div className="view">
		<h4 className = "view">Details</h4>
		<p className="details">ID: {' ' + finding.id}</p>
		<p className="details">Code: {' ' + finding.code}</p>
		<p className="details">Name: {' ' + finding.name}</p>
			{finding.coordinates && 
			<div>
				<p className="details">Coordinates: </p>
				<p className="details2"> Latitude: {' ' + finding.coordinates.latitude}</p>
				<p className="details2">Longitude: {' ' + finding.coordinates.longitude}</p>
			</div>
			}
			{finding.address &&
				<p className="details">Address: {' ' + finding.address}</p>
			}
		<RemoveBuilding removal={removal}/>
		</div>
			
		);
	}
}
export default ViewBuilding;