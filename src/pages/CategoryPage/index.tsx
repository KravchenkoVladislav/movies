import React, {useEffect}  from 'react';
import routeMain from './routes';
import { TypedDispatch } from 'types/typeToLoadMovies';

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selector';

import MoviesList from 'componets/MoviesList';

import './styles.scss';

const CategoryPage = () => {
    const value = 'War';

    const dispatch = useDispatch<TypedDispatch>();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadMovies(value));
    }, [])

    return (
        <section className='categoryPage'>
           <h2>Выбранная категория: <span>{value}</span></h2>
           <div className='movies'>{moviesList.length > 0 ? <MoviesList list={moviesList}/> : <></>}</div>
        </section>
    )
}
 
export {routeMain};
export default CategoryPage;

  