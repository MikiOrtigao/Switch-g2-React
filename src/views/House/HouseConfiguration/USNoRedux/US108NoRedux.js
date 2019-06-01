import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";

class US108NoRedux extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:9999/houseSettings/houseRooms')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          item: json,
        })
      })
      .catch(console.log)
  }

  render() {

    const headers = {
      name: "Name",
      floor: "Floor",
      height: "Height",
      length: "Length",
      width: "Width"
    };

    var {isLoaded, item} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" lg="6">
              <Card>
                <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>{headers.name}</th>
                      <th>{headers.floor}</th>
                      <th>{headers.height}</th>
                      <th>{headers.length}</th>
                      <th>{headers.width}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {item.map(row => (
                      <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.floor}</td>
                        <td>{row.height}</td>
                        <td>{row.length}</td>
                        <td>{row.width}</td>
                      </tr>))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
    );
    }}}

    export default US108NoRedux;
