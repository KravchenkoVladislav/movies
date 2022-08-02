import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage} from 'pages/MainPage';
import { routeMain as routeCategoryPage } from 'pages/CategoryPage';
import { routeMain as routeContacts} from 'pages/Contacts';
import { routeMain as routeSearchPage} from 'pages/SearchPage';


import './styles.scss'

const Header = () => {
    return (
      <header className="mainHeader">
        <div className='container'>
          <div className='title'><span className='logo'></span>Moviesinfo</div>
          <nav>
            <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
              Главная
            </NavLink>

            <NavLink to={routeCategoryPage()} activeClassName={'linkActive'}>
              Фильмы по категории
            </NavLink>

            <NavLink to={routeContacts()} activeClassName={'linkActive'}>
              О нас
            </NavLink>

            <NavLink to={routeSearchPage()} activeClassName={'linkActive'}>
              Поиск
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  