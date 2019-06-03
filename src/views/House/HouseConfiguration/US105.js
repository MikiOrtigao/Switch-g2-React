import React, {Component} from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Col,
  Form, FormText, CardFooter
} from 'reactstrap';

class US105 extends Component {
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
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Add a new room to the
          house. (US105)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader>
              <strong>US 105</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label>Room Name</Label>
                  <Input type="text" placeholder="Enter Name.."/>
                </FormGroup>
                <FormGroup>
                  <Label>Room Description</Label>
                  <Input type="text" placeholder="Enter Description.."/>
                </FormGroup>
                <FormGroup>
                  <Label>Room House Floor</Label>
                  <Input type="number" placeholder="Enter Floor.."/>
                </FormGroup>
                <FormGroup>
                  <Label>Room Width</Label>
                  <Input type="number" placeholder="Enter Width.."/>
                </FormGroup>
                <FormGroup>
                  <Label>Room Length</Label>
                  <Input type="number" placeholder="Enter Length.."/>
                </FormGroup>
                <FormGroup>
                  <Label>Room Height</Label>
                  <Input type="number" placeholder="Enter Height.."/>
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

export default US105;
