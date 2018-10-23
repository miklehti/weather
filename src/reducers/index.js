import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

//combineReducerit muodostaa applikaation staten
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
