import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRoom} from './Actions';
import {Button, Card, CardBody, Collapse} from "reactstrap";
import RoomCreator from "../RoomCreator";

class US105Redux extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      name: undefined,
      floor: undefined,
      width: undefined,
      length: undefined,
      height: undefined
    };
  }

  componentDidMount() {
    this.props.onFetchRoom(this.state.name, this.state.floor, this.state.width, this.state.length, this.state.height);
  }

  handleRoomCreator = (name, floor, width, length, height) => {

    console.log("handleRoomCreator: name" + JSON.stringify(name) + "floor: " + JSON.stringify(floor) + "width: " + JSON.stringify(width) + "length: " + JSON.stringify(length) + "height: " + JSON.stringify(height))
    {
      const name = name;
      const floor = floor;
      const width = width;
      const length = length;
      const height = height;
      this.setState({name: name, floor: floor, width: width, length: length, height: height});
      this.props.onFetchRoom(name, floor, width, length, height)

    }
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {

    const {loading} = this.props;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    } else {
      const {name} = this.props;
      const {floor} = this.props;
      const {width} = this.props;
      const {length} = this.props;
      const {height} = this.props;
      return (
        <div>
          <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Add a new room to the
            house. (US105)</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <RoomCreator getRoom={this.handleRoomCreator()}/>
                <h5 key={name}>The room has the following
                  details: {name + ',' + floor + ',' + width + ',' + length + ',' + height}</h5>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      );

    }
  }


}

const mapStateToProps = (state) => {
  return {
    loading: state.usersReducer.loading,
    name: state.usersReducer.name,
    floor: state.usersReducer.floor,
    width: state.usersReducer.width,
    length: state.usersReducer.length,
    height: state.usersReducer.height,
    error: state.usersReducer.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRoom: (name, floor, width, length, height) => {
      dispatch(fetchRoom({name, floor, width, length, height}))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US105Redux);
