import { Dispatch } from "redux";
import getId from "services/getId";

import { IStore } from './types';

export const setIdDetaoilAction = (movie: IStore['movie']) => {
    return {
        type: 'movie/setMovie',
        payload: movie,
    }
}

export const loadIdDetaoil= (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getId(id);

        dispatch(setIdDetaoilAction(response.data))
    } catch (e) {
        console.log(e, " - произошла ошибка")
    }
}