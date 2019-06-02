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

    const { loading,data } = this.props;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    }
       else {
            return (
              <div>
                <h4 key={data}>
                  Current Temperature: {data}
                </h4>
              </div>
          );

      }
      }


}

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      data: state.data,
      error: state.error
    }
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
