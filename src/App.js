import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  lists: this.props.data,
	  adding :false,
      filterText: '',
      selectedBuilding: 0
    };
  }

  
  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
	this.setState({
			filterText: value
		});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
	//const favList = this.state.selectedBuilding([id]) //
		this.setState({
		selectedBuilding: id
		})
  }
  
  addBuilding(newBuild){
	  newBuild.id= this.state.lists[this.state.lists.length - 1].id +1;
	  var lists = [...this.state.lists, newBuild]
	  this.setState({
		  lists: lists,
		  selectedBuilding: newBuild.id
	  })
  }
  
  removeBuilding(){
	  var lists = this.state.lists.filter(list=>{
		  return list.id !== this.state.selectedBuilding
	  })
	  
	  this.setState({
		  lists:lists
	  })
  }
  
  isAdding(value){
	  this.setState({
		  adding: value
	  })
  }

  render() {
    const hasSearch = this.state.filterText.length > 0
    return (
      <div className="bg">
        <div className="row">
		  <div className="UF">UF</div>
          <div className="DirectoryApp">Directory App</div>
        </div>

        <Search
			filterText=  {this.state.filterText} 
			filterUpdate = {this.filterUpdate.bind(this)}
		/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
			
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <div className= "Code"> Code </div>
					  <div className= "Building"> Building </div>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.lists}
					filterText = {this.state.filterText}
					selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
			
            </div>
            <div className="column2">
			<div className = "section">
              <ViewBuilding 
				selectedBuilding = {this.state.selectedBuilding}
				lists={this.state.lists}
				removal = {this.removeBuilding.bind(this)}
			  />
			  </div>
			  <br/>
			  <div className = "section">
			  <AddBuilding 
			  addBuilding = {this.addBuilding.bind(this)}
			  addition = {this.state.adding}
			  isAdding = {this.isAdding.bind(this)}
			  />
			  </div>
            </div>
          </div>
		  <div className="credits">
          <Credit />
		  </div>
        </main>
      </div>
    );
  }
}

export default App;
