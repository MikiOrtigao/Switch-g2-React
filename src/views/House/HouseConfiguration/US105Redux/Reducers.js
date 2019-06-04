import {
  FETCH_ROOM_INFO_STARTED,
  FETCH_ROOM_INFO_SUCCESS,
  FETCH_ROOM_INFO_FAILURE,

} from './Actions'


const initialstate = {
  loading: false,
  error: null,
  name: undefined,
  floor: undefined,
  width: undefined,
  length: undefined,
  height: undefined
};


export default function Reducer105(state = initialstate, action) {
  switch (action.type) {
    case FETCH_ROOM_INFO_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        name: undefined,
        floor: undefined,
        width: undefined,
        length: undefined,
        height: undefined
      };
    case FETCH_ROOM_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        name: action.payload.name,
        floor: action.payload.floor,
        width: action.payload.width,
        length: action.payload.length,
        height: action.payload.height
      };
    case FETCH_ROOM_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        name: undefined,
        floor: undefined,
        width: undefined,
        length: undefined,
        height: undefined
      };

    default:
      return state;
  }
}


