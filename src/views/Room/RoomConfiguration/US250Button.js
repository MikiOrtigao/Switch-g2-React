import React, {Component} from 'react';
import { Button} from 'reactstrap';
import US250GetSensors from "./US250GetSensors";


class US250Button extends Component {

  state = {isHidden: true}
  toggleHidden = ()=>this.setState((prevState)=>({isHidden: !prevState.isHidden}))
  render(){
    return(
      <div>
     <Button onClick={this.toggleHidden}>Get the Room Sensors</Button>
        {!this.state.isHidden && <US250GetSensors/>}
      </div>
    )
  }
}

export default US250Button;
