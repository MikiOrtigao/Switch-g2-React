import React from 'react';
import 'react-day-picker/lib/style.css';
import {fetchRoom} from "./US105Redux/Actions";

class RoomCreator extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: undefined,
      floor: undefined,
      width: undefined,
      length: undefined,
      height: undefined,
    };
  }


  updateRoom = (name, floor, width, length, height) => {
    console.log("getRoom: " + JSON.stringify(this.props));
    this.setState({
      name: name,
      floor: floor,
      width: width,
      length: length,
      height: height
    })
  };

  submitFormHandler = event => {
    event.preventDefault();

    console.dir(this.state.name);
    console.dir(this.state.floor);
    console.dir(this.state.width);
    console.dir(this.state.length);
    console.dir(this.state.height);

    fetchRoom(this.state)

  };

  handleInputChange = (attribute) => (event) => { // temos de arranjar maneira de fazer set state a cada um dos atributos ^^ lá em cima, à medida que são alterados no form. isto é uma...
    console.log(event);
    this.props.getRoom(this.state.name, this.state.floor, this.state.width, this.state.length, this.state.height);

    const saveValue = event.target.value;
    this.setState({
      text: 'new state: ' + saveValue
    });
    console.log(saveValue);
    console.log(event.target.value)
  }


  render() {
    return (
      <div>

        <form onSubmit={this.submitFormHandler}>
          <div>
            <input value={this.state.name} type="text" name="name" ref={"name"} onChange{() => this.handleInputChange('name')}/>
            <input value={this.state.floor} type="text" name="floor" ref={"floor"} onChange={this.handleInputChange}/>
            <input value={this.state.width} type="number" name="width" ref={"width"} onChange={this.handleInputChange}/>
            <input value={this.state.length} type="number" name="length" ref={"length"}
                   onChange={this.handleInputChange}/>
            <input value={this.state.height} type="number" name="height" ref={"height"}
                   onChange={this.handleInputChange}/>
          </div>
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default RoomCreator;
