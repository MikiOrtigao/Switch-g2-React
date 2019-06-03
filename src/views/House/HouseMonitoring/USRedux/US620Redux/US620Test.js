import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTotalRainfalls} from './Actions';
import Reducer620 from "../US600Redux/Reducers600";

class US620Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchRainfall();
  }

  render() {
    const {loading, rainfall} = this.props;
    if (loading === true) {
      return (<h1>Loading ....</h1>);
    }
    else {
      return (
        <div>
          <h4 key={rainfall}>
            Total Rainfall: {rainfall}
          </h4>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.Reducer620.loading,
    rainfall: state.Reducer620.rainfall,
    error: state.Reducer620.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRainfall: () => {
      dispatch(fetchTotalRainfalls({}))
    }

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(US620Test);
