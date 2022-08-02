import React, {useEffect, useState}  from 'react';
import routeMain from './routes';
import { TypedDispatch } from 'types/typeToLoadMovies';
import vector from 'assets/Vector.png'

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selector';

import MoviesList from 'componets/MoviesList';

import './styles.scss';

const SearchPage = () => {
    const [category, setCategory] = useState('');

    const dispatch = useDispatch<TypedDispatch>();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        category == '' && handleChange()
    }, [dispatch, category])

    const getCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }

    const handleChange = () => {
        dispatch(loadMovies(category));
    }
    return (
        <section className='searchPage'>
            <h1>Поиск по категории</h1>
            <img onClick={handleChange} className='vector' src={vector} alt='vector'/>
            <input className='input' type='text' onChange={getCategoryInput} placeholder="Example: drama"/>
            <div className='wrapperMovies'>
                <h2>Результаты поиска:</h2>
                <div className='twoMovie'>
                    {moviesList.length > 0 ? <MoviesList list={moviesList.slice(0,2)}/> : <div className='active'>Введите поисковой запрос для отображения результатов</div>}
                </div>
            </div>
        </section>
    )
}
export {routeMain};
export default SearchPage;