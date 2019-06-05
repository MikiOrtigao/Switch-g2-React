import React from 'react';
import 'react-day-picker/lib/style.css';
import {Button} from "reactstrap";
import {fetchRoom} from "./Actions";
import {connect} from 'react-redux';

class RoomCreator extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isHidden: true,
      name: '...',
      floor: 0,
      width: 0,
      length: 0,
      height: 0,
    };

    this.handleInputChange = attribute => event => {
      this.setState({
        [attribute]: event.target.value
      });
    };
  }

  handleSubmit() {
    this.props.onFetchRoom(this.state);
  }

  toggleHidden = () => this.setState((prevState) => ({isHidden: !prevState.isHidden}))


  render() {
    const {name, floor, width, length, height} = this.state;
    return (
      <>

        <label> Name:
          <input value={this.state.name} type="text" name="name" onChange={this.handleInputChange('name')}/>
        </label>

        <label> Floor:
          <input value={this.state.floor} type="number" name="floor" onChange={this.handleInputChange('floor')}/>
        </label>

        <label> Width:
          <input value={this.state.width} type="number" name="width" onChange={this.handleInputChange('width')}/>
        </label>

        <label> Length:
          <input value={this.state.length} type="number" name="length" onChange={this.handleInputChange('length')}/>
        </label>

        <label> Height:
          <input value={this.state.height} type="number" name="height" onChange={this.handleInputChange('height')}/>
        </label>

        {' '}
        <Button onClick={this.handleSubmit && this.toggleHidden}>Save new room configuration</Button>
        {!this.state.isHidden && <p>The room has been created with the following
          details: {name + ', ' + floor + ', ' + width + ', ' + length + ', ' + height + '.'}</p>
        }

      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRoom: ({name, floor, width, length, height}) => {
      dispatch(fetchRoom({name, floor, width, length, height}))
    }
  }
};

export default connect(null, mapDispatchToProps)(RoomCreator);

