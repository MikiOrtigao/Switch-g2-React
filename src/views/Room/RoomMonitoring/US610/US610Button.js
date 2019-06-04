import React, {Component} from 'react';
import { Button} from 'reactstrap';
import US610GetTemperature from "./US610GetTemperature";


class US610Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      item:{},
      roomID: '',
      day:''
    }
  }

  componentDidMount() {
    fetch("https://localhost:9898/roomMonitoring/dayMaxTemperature/"+this.state.roomID+"?initialDate="+this.state.day)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          item: json,
        })
      })
      .catch(console.log)
  }

  toggleHidden = ()=>this.setState((prevState)=>({isHidden: !prevState.isHidden}))
  render(){
    return(
      <div>
        <Button onClick={this.toggleHidden}>Get the Maximum temperature in the day {this.state.day}</Button>
        {!this.state.isHidden && <US610GetTemperature item={this.state.item}/>}
      </div>
    )
  }
}

export default US610Button;
