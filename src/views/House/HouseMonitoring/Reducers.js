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


function usersReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_GAS_STARTED:
      return {
        ...state,
        users: {  // reducer do user
          loading: true, // coloca o loading a true
          error: null,
          data: {}
        }
      }
    case FETCH_GAS_SUCCESS:
      return {
        ...state,
        users: { // reducer de sucesso
          loading: false, //loading fica falso - o componente fica renderizado
          error: null,
          data: {...action.payload.data}
        }
      }
    case FETCH_GAS_FAILURE:
      return {
        ...state,
        users: {
          loading: false,
          error: action.payload.error,
          data: {},
        }
      }

    default:
      return state
  }
}


export default usersReducer;
