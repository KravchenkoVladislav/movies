import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


import moviesReducer from "./movies/reducer";
import movieReducer from "./idDetail/reducer";

const rootReducer = combineReducers({
    moviesReducer, movieReducer
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;