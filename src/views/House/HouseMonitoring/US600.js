import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import US600NoRedux from "./USNoRedux/US600NoRedux";
import US600Test from "./US600Test";

class US600 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{ backgroundColor: '#FFFFFF', marginBottom: '1rem' }}>Get the current temperature in the house area. (US600)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <US600NoRedux  />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

}

export default US600;
