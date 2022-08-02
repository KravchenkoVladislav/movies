import { Dispatch } from "redux";
import getMovies from "services/getMovies";


import { IStore } from './types';

export const setMoviesAction = (list: IStore['list']) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
}

export const loadMovies = (category: string) => async (dispatch: Dispatch) => {
    try {
        const response = await getMovies(category);

        dispatch(setMoviesAction(response.data))
    } catch (e) {
        console.log(e, " - произошла ошибка")
    }
}