import React, {Component} from 'react';
import US600 from "./US600";
import US620 from "./US620";
import US623 from "./US623";
import US630 from "./US630";
import US631 from "./US631";
import US633 from "./US633";

class HouseMonitoring extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {
    return (

      <div>
        <h2>Welcome to the House Monitoring Menu.</h2>
        <h4>Please select the US you want to run.</h4>
        <US600/>
        <US620/>
        <US623/>
        <US630/>
        <US631/>
        <US633/>
      </div>
    );
  }
}

export default HouseMonitoring;
