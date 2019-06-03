import React, {Component} from 'react';
import { Button} from 'reactstrap';
import US610GetTemperature from "./US610GetTemperature";


class US610Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      roomID: '',
      day:''
    }
  }

  toggleHidden = ()=>this.setState((prevState)=>({isHidden: !prevState.isHidden}))
  render(){
    return(
      <div>
        <Button onClick={this.toggleHidden}>Get the Maximum temperature in the day {this.state.day}</Button>
        {!this.state.isHidden && <US610GetTemperature roomID = {this.props.roomID} day={this.props.day}/>}
      </div>
    )
  }
}

export default US610Button;
