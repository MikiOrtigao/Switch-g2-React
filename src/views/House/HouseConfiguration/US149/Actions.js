import axios from 'axios';

export const REMOVE_GRID_ROOM_INFO_STARTED = 'REMOVE_GRID_ROOM_INFO_STARTED';
export const REMOVE_GRID_ROOM_INFO_SUCCESS = 'REMOVE_GRID_ROOM_INFO_SUCCESS';
export const REMOVE_GRID_ROOM_INFO_FAILURE = 'REMOVE_GRID_ROOM_INFO_FAILURE';


export const fetchRoomFromGrid = ({name, gridID}) => {
  return dispatch => {
    dispatch(fetchRoomFromGridInfo(name, gridID)); // antes de fazer o get, coloca o loading a true
    axios
      .delete('http://localhost:9898/gridSettings/grids/' + gridID, //falta autorização
        {
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(name)
        })
      .then(res => {
        dispatch(fetchRoomFromGridInfoSuccess(res.data)); // chegaram os resultados (dados) , loading fica a falso
      })
      .catch(err => {
        dispatch(fetchRoomFromGridInfoFailure(err.message));
      });
  };
};


export function fetchRoomFromGridInfo(name, gridID) {
  return {
    type: REMOVE_GRID_ROOM_INFO_STARTED,
    payload: {
      name: name,
      gridID: gridID,
    }
  }
}

export function fetchRoomFromGridInfoSuccess(data) { // cria uma açao
  return {
    type: REMOVE_GRID_ROOM_INFO_SUCCESS,
    payload: {
      message: data,
    }
  }
}

export function fetchRoomFromGridInfoFailure(message) {
  return {
    type: REMOVE_GRID_ROOM_INFO_FAILURE,
    payload: {
      error: message
    }
  }
}
