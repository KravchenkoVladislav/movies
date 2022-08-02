import React from "react";
import MoviesItem from "./componets/MoviesItem";

import { IMoviesDetail } from "types/IMoviesDetail";

import './styles.scss';

interface IMoviesListLarams {
    list: IMoviesDetail[];
}

const MoviesList: React.FC<IMoviesListLarams> = ({list}) => (
    <div className="moviesList">
        {list.map((movies: IMoviesDetail) => (
            <MoviesItem key={movies.show.id} item={movies}/>
        ))}
    </div>
)

export default MoviesList;