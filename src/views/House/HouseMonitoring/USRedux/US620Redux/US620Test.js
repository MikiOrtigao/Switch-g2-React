import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGAs, fetchTotalRainfalls, fetchtTotalRainfalls} from './Actions';
import usersData from "../../../../Users/UsersData";

class US620Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = (date) => {
    this.props.onFetchRainfall(date);
  }

  handleDayChange(day) {
    this.setState({date: day});
  }

  render() {

    const {loading, data} = this.props;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    } else {
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
    onFetchRainfall: (date) => {
      dispatch(fetchTotalRainfalls({date}))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US620Test);
