import React from 'react';
import 'react-day-picker/lib/style.css';

class RoomCreator extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      name: undefined,
      floor: undefined,
      width: undefined,
      length: undefined,
      height: undefined,
    };
  }

  getRoom = () => {
    console.log("getRoom: " + JSON.stringify(this.props))
    this.props.getData(this.state.name, this.state.floor, this.state.width, this.state.length, this.state.height)
  }

  // handleRoomClick = (name, floor, width, length, height) => {
  //   this.setState(name = 1, floor = 2, width = 3, length = 4, height = 5);
  //   this.getRoom();
  // }

  submitFormHandler = event => {
    event.preventDefault();

    console.dir(this.refs.name.value)
    console.dir(this.refs.floor.value)
    console.dir(this.refs.width.value)
    console.dir(this.refs.length.value)
    console.dir(this.refs.height.value)

  }


  render() {
    return(
      <div>

        <form onSubmit={this.submitFormHandler}>
          <div>
            <input type = "text" name="name" ref={"name"}/>
            <input type = "text" name="floor" ref={"floor"}/>
            <input type = "number" name="width" ref={"width"}/>
            <input type = "number" name="length" ref={"length"}/>
            <input type = "number" name="height" ref={"height"}/>
          </div>
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default RoomCreator;
