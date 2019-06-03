import React, { Component } from 'react';
import {Collapse, Button, CardBody, Card, CardHeader, Form, FormGroup, Label, Input, CardFooter} from 'reactstrap';

class US145 extends Component {
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
        <Button onClick={this.toggle} style={{ backgroundColor: '#FFFFFF', marginBottom: '1rem' }}>Get a list of existing rooms attached to a house grid. (US145)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader>
              <strong>US 145</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label>Select Energy Grid</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US145;
