import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import routeMain from './routes';
import { TypedDispatch } from 'types/typeToLoadMovies';

import { useDispatch, useSelector } from 'react-redux';
import { loadIdDetaoil } from 'store/idDetail/actions';
import { selectMovie } from 'store/idDetail/selector';

import { ID } from 'types/ID';

import star from 'assets/star.png'
import mov from 'assets/mov.jpg'

import './styles.scss';


const MoviesDetail = () => {
    const {id} = useParams<ID>();

    const dispatch = useDispatch<TypedDispatch>();
    const movies = useSelector(selectMovie);

    useEffect(() => {
        dispatch(loadIdDetaoil(id))
    }, [id, movies])
    return (
        <section className='moviesDetail'>
           {movies.id && (
            <div className='movie'>
                <div className='wrapper'>
                        <img className='img' src={movies.image ? movies.image.medium: mov} alt={movies.name}/>
                    <div className='content'>
                        <div className='wrapperText'>
                        <div className='name'>{movies.name}</div>
                            <div className='text'>ГОД ВЫХОДА:</div>
                            <div className='text'>СТРАНА:</div>
                            <div className='text'>ЖАНР:</div>
                            <div className='text'>ОПИСАНИЕ:</div>
                        </div>
                        <div className='wrapperInfo'>
                            <div className='wrapperStar'>
                                <img className='star' src={star} alt="star"/>
                                <div className='rating'>{`${movies.rating.average ? movies.rating.average : 0}/10`}</div>
                            </div>
                            <div className='info'>{movies.premiered ? movies.premiered.split('-')[0] : 'Неизвесный год'}</div>
                            <div className='info'>{movies.network ? movies.network.country.name : 'Страна неизвесна'}</div>
                            <div className='info'>{movies.genres.length > 0 ? movies.genres.join(', ') : 'Нет информации'}</div>
                            <div className='info'><span dangerouslySetInnerHTML={{__html: movies.summary ? movies.summary: 'Нет информации'}} /></div>
                        </div>
                    </div>
                </div>
            </div>
           )}
        </section>
    )
}
 
export {routeMain};

export default MoviesDetail;