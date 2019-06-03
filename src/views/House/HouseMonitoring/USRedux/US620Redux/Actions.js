import axios from 'axios';

export const FETCH_RF_STARTED = 'FETCH_RF_STARTED';
export const FETCH_RF_SUCCESS = 'FETCH_RF_SUCCESS';
export const FETCH_RF_FAILURE = 'FETCH_RF_FAILURE';


export const fetchTotalRainfalls = ({date}) => {
  return dispatch => {
    dispatch(fetchRainfallStarted()); // antes de fazer o get, coloca o loading a true
    axios
      .get(`http://localhost:9898/houseMonitoring/totalRainfall`, {
        date
      })

      .then(res => {
        dispatch(fetchRainfallSuccess(res.data)); // chegaram os resultados (dados) , loading fica a falso
      })
      .catch(err => {
        dispatch(fetchRainfallFailure(err.message));
      });

  };
}

export function fetchRainfallStarted() {
  return {
    type: FETCH_RF_STARTED
  }
}

export function fetchRainfallSuccess(data) { // cria uma açao
  return {
    type: FETCH_RF_SUCCESS,
    payload: {
      data: data //passa o array com os dados
    }
  }
}

export function fetchRainfallFailure(message) {
  return {
    type: FETCH_RF_FAILURE,
    payload: {
      error: message
    }
  }
}



