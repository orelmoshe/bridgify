import { combineReducers } from 'redux';
import placeReducer from './place.reducer';

export default combineReducers({
	placeSelected: placeReducer
});
