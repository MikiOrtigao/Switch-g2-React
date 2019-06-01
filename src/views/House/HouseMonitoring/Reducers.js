import {
  FETCH_GAS_STARTED,
  FETCH_GAS_SUCCESS,
  FETCH_GAS_FAILURE,

} from './Actions'


const initialstate = {
  users: {
    loading: false,
    error: null,
    data: {},
  }
};


export default function usersReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_GAS_STARTED:
      return {
        ...state,
        // reducer do user
        users: {
          loading: true,
          error: null,
          data: {}
        }

      };
    case FETCH_GAS_SUCCESS:
      return {
        ...state,
        users: {
          loading: false,
          error: null,
          data: action.payload.data
        }

      };
    case FETCH_GAS_FAILURE:
      return {
        ...state,
        users: {
          loading: false,
          error: action.payload.error,
          data: {},
        }
      };

    default:
      return state;
  }
}


