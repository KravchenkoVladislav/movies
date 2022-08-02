import React, {useEffect}  from 'react';
import routeMain from './routes';
import { TypedDispatch } from 'types/typeToLoadMovies';

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selector';

import MoviesList from 'componets/MoviesList';

import './styles.scss';

const MainPage = () => {
    const dispatch = useDispatch<TypedDispatch>();
    const moviesList = useSelector(selectList);

    const value = 'thriller';

    useEffect(() => {
        dispatch(loadMovies(value));
    }, [])

    return (
        <section className='mainPage'>
            <div className='title'>
                <h1>MOVIESinfo</h1>
                <p>Самый популярный портал о фильмах</p>
            </div>
            <div className='movies'>
                {moviesList.length > 0 ? <MoviesList list={moviesList.slice(0,8)}/> : <div className='noResponse'>Нет ответа от сервера</div>}
            </div>
        </section>
    )
}
 
export {routeMain};
export default MainPage;

  