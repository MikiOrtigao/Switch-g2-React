import axios from 'axios';

export const FETCH_GAS_STARTED = 'FETCH_GAS_STARTED'
export const FETCH_GAS_SUCCESS = 'FETCH_GAS_SUCCESS'
export const FETCH_GAS_FAILURE = 'FETCH_GAS_FAILURE'


export const fetchGAs  = () => {
  return (dispatch, getState) => {
    dispatch(fetchGAsStarted()); // antes de fazer o get, coloca o loading a true
    axios
      .get(`http://localhost:9999/houseMonitoring/currentHouseAreaTemperature`)
      .then(res => {
        dispatch(fetchGAsSuccess(res.data)); // chegaram os resultados (dados) , loading fica a falso
      })
      .catch(err => {
        dispatch(fetchGAsFailure(err.message));
      });
    console.log('current state:', getState());
  };
};

const fetchGAsStarted = () => ( {
    type: FETCH_GAS_STARTED
});

const fetchGAsSuccess = data => ( { // cria uma açao
    type: FETCH_GAS_SUCCESS,
    payload: {
        ...data  //passa o array com os dados
    }
});

const fetchGAsFailure = error => ( {

    type: FETCH_GAS_FAILURE,
    payload: {
      error
    }

});



