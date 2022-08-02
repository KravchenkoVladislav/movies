import { AnyAction } from "redux";
import { IShow } from "types/IShow";
import { IStore } from "./types";

const initialState = {
    movie: {} as IShow
}

const movieReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'movie/setMovie':
            return{...state, movie: action.payload}
        default:
            return state;
    }
}

export default movieReducer;