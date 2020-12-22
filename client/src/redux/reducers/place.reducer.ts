import * as T from '../types';
import initialPlaceState, { IPlace } from '../state/place.state';

const placeReducer = (state: IPlace = initialPlaceState, action: any): IPlace => {
	if (action.type === T.SET_PLACE) {
		return {
			...state,
			placeSelected: action.payload
		};
	}
	return state;
};
export default placeReducer;
