import { IStore } from './types';

export const selectMovie = (state: {movieReducer: IStore} ): IStore['movie'] => state.movieReducer.movie;