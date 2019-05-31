import React, {Component} from 'react';

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

    var {isLoaded, item} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <ul>
            {item.map(item => (
              <li key={item.name}>
                Name: {item.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default US108NoRedux;
