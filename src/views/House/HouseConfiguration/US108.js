import React, { Component } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardFooter
} from 'reactstrap';

class US108 extends Component {
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
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Get a list of existing rooms. (US108)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader>
              <strong>US 108</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">Email</Label>
                  <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                  <FormText className="help-block">Please enter your email</FormText>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="nf-password">Password</Label>
                  <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." autoComplete="current-password"/>
                  <FormText className="help-block">Please enter your password</FormText>
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

export default US108;
