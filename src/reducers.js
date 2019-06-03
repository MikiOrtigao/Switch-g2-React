import {combineReducers} from 'redux';
import Reducers600 from './views/House/HouseMonitoring/USRedux/US600Redux/Reducers600.js';
import Reducer620 from './views/House/HouseMonitoring/USRedux/US620Redux/Reducers620.js';
import Reducer108 from './views/House/HouseConfiguration/US108Redux/Reducers.js';

export default combineReducers({
  Reducers600,
  Reducer620,
  Reducer108
})
