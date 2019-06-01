import {
  FETCH_GAS_STARTED,
  FETCH_GAS_SUCCESS,
  FETCH_GAS_FAILURE,

} from './Actions'



const initialState = {
  users: {
    loading: false,
    error: null,
    data: {},
  }
};


export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAS_STARTED:
      return {
        ...state,
         // reducer do user
          loading: true // coloca o loading a true

      };
    case FETCH_GAS_SUCCESS:
      return {
        ...state,
        loading: false, //loading fica falso - o componente fica renderizado
        error: null,
        data: [...action.payload.data]

      };
    case FETCH_GAS_FAILURE:
      return {
        ...state,
          loading: false,
          error: action.payload.error

      };

    default:
      return state;
  }
}


