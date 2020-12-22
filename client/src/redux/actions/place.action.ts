import * as T from '../types';

export const setPlaceCurrent = (dispatch: any, payload: any) => {
	dispatch({
		type: T.SET_PLACE,
		payload
	});
};
