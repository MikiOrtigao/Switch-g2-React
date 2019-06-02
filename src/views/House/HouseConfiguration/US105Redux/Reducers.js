import {
  FETCH_GAS_STARTED,
  FETCH_GAS_SUCCESS,
  FETCH_GAS_FAILURE,

} from './Actions'


const initialstate = {
    loading: false,
    error: null,
    body: []
};


export default function usersReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_GAS_STARTED:
      return {
        ...state,
          loading: true,
          error: null,
          body: []
      };
    case FETCH_GAS_SUCCESS:
      return {
        ...state,
          loading: false,
          error: null,
          body: [...action.payload.body]
      };
    case FETCH_GAS_FAILURE:
      return {
        ...state,
          loading: false,
          error: action.payload.error,
          body: []
      };

    default:
      return state;
  }
}


