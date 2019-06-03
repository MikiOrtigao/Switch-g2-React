import {
  FETCH_AMP_STARTED,
  FETCH_AMP_SUCCESS,
  FETCH_AMP_FAILURE,

} from './Actions'


const initialstate = {
  loading: false,
  error: null,
  amplitude: 0
};


export default function Reducers633(state = initialstate, action) {
  switch (action.type) {
    case FETCH_AMP_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        amplitude: 0
      };
    case FETCH_AMP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        amplitude: action.payload.rainfall
      };
    case FETCH_AMP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        amplitude: 0
      };

    default:
      return state;
  }
}


