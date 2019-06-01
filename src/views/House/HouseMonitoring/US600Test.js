import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGAs } from './Actions';
import usersData from "../../Users/UsersData";

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
          const {data} = this.props; // data = this.props.data;

            return (
              <div>

                <h1>{data}</h1>

              </div>
          );

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

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => {
      dispatch(fetchGAs())
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US600Test);
