import {
  FETCH_RF_STARTED,
  FETCH_RF_SUCCESS,
  FETCH_RF_FAILURE,

} from './Actions'


const initialstate = {
    loading: false,
    error: null,
    rainfall: 0
};


export default function reducer620(state = initialstate, action) {
  switch (action.type) {
    case FETCH_RF_STARTED:
      return {
        ...state,
          loading: true,
          error: null,
          rainfall: 0
      };
    case FETCH_RF_SUCCESS:
      return {
        ...state,
          loading: false,
          error: null,
          rainfall: action.payload.rainfall
      };
    case FETCH_RF_FAILURE:
      return {
        ...state,
          loading: false,
          error: action.payload.error,
          rainfall: 0
      };

    default:
      return state;
  }
}


