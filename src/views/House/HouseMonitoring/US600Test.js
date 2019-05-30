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
          const rows = data.map((row, index) => {

            return (
              <div key={index}>
                <p>{row.id}</p>
                <p>{row.name}</p>
                <p>{row.area}</p>
              </div>
            )
          })
          return (
            <p>{rows}</p>
          );
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => {
      dispatch(fetchGAs())
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US600Test);
