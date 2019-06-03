import {
  FETCH_RF_STARTED,
  FETCH_RF_SUCCESS,
  FETCH_RF_FAILURE,

} from './Actions'


const initialstate = {
  loading: false,
  error: null,
  data: 0
};


export default function usersReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_RF_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: 0
      };
    case FETCH_RF_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
    case FETCH_RF_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: 0
      };

    default:
      return state;
  }
}


