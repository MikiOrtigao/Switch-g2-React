import React from 'react';
import 'react-day-picker/lib/style.css';
import {Button} from "reactstrap";
import {fetchRoomFromGrid} from "./Actions";
import {connect} from 'react-redux';

class GridRoomRemover extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      gridID: '',
    };

    this.handleInputChange = attribute => event => {
      this.setState({
        [attribute]: event.target.value
      });
    };
  }

  handleSubmit() {
    this.props.onfetchRoomFromGrid(this.state);
  }


  render() {
    const {name, gridID} = this.state;
    return (
      <>
        RoomID:<input value={this.state.name} type="text" name="name" onChange={this.handleInputChange('name')}/>
        GridID:<input value={this.state.gridID} type="text" name="grid" onChange={this.handleInputChange('gridID')}/>
        <Button style={{backgroundColor: '#e4e5e6', marginBottom: '1rem'}} onClick={this.handleSubmit}>Remove Room {name} from {gridID} Energy Grid</Button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchRoomFromGrid: ({name, gridID}) => {
      dispatch(fetchRoomFromGrid({name, gridID}))
    }
  }
};

export default connect(null, mapDispatchToProps)(GridRoomRemover);

