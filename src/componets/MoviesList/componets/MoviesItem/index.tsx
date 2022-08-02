import { NavLink } from 'react-router-dom';

import { routeMain as  routeMoviesDetail } from 'pages/MoviesDetail';

import { IMoviesDetail } from 'types/IMoviesDetail';

import './styles.scss';
import mov from 'assets/mov.jpg'

interface IMoviesItemParams {
    item: IMoviesDetail;
}

const MoviesItem: React.FC<IMoviesItemParams> = ({item}) => (
    <NavLink className="moviesItem" to={routeMoviesDetail(item.show.id)}>
        <div className='movie'>
            <img className='img' src={item.show.image ? item.show.image.medium: mov} alt={item.show.name}/>
            <div className='name'>{item.show.name}</div>
            <div className='title'>
                <div className='country'>{item.show.network ? `${item.show.premiered ? item.show.premiered.split('-')[0]: 'Year unknown'} (${item.show.network.country.name})` : 'Country unknown'}</div>
                <div className='genres'>{item.show.genres.length > 0 ? item.show.genres.join(', ') : 'No information'}</div>
            </div>
        </div>
    </NavLink>
)

export default MoviesItem;
// item.show.genres ? item.show.genres.join(', ') : 'No information'