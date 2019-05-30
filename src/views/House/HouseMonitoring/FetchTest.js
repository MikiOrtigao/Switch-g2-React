import React, {Component} from 'react';

class FetchTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:9898/geographic_area_settings/areas')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.name}>
                Name: {item.name}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}

export default FetchTest;
