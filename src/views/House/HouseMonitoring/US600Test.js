import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGAs } from './Actions';

class US600Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchUsers();
  }

  render() {

    const { loading, data } = this.props.users;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    }
       else {
        if (data.length > 0) {
          const {data} = this.props; // data = this.props.data;
          return(<h4 key={data.id}>
            Current Temperature: {data}
          </h4>);
        } else {
          return (<h1>No data ....</h1>);
        }
      }
    }

}

const mapStateToProps = (state) => {
  return {
    users: {
      loading: state.users.loading,
      data: state.users.data,
      error: state.users.error,
    }}
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: data => {
      dispatch(fetchGAs(data))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US600Test);
