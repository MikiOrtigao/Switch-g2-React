import {
  FETCH_ROOM_INFO_STARTED,
  FETCH_ROOM_INFO_SUCCESS,
  FETCH_ROOM_INFO_FAILURE,

} from './Actions'


const initialstate = {
  loading: false,
  error: null,
  room: {}
};


export default function Reducer105(state = initialstate, action) {
  switch (action.type) {
    case FETCH_ROOM_INFO_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        room: {}
      };
    case FETCH_ROOM_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        room: {...action.payload.room}
      };
    case FETCH_ROOM_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        room: {}
      };

    default:
      return state;
  }
}


