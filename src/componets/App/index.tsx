import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage, { routeMain as routeMainPage} from 'pages/MainPage';
import CategoryPage, { routeMain as routeCategoryPage } from 'pages/CategoryPage';
import Contacts, { routeMain as routeContacts} from 'pages/Contacts';
import SearchPage, { routeMain as routeSearchPage} from 'pages/SearchPage';
import MoviesDetail, { routeMain as routeMoviesDetail } from 'pages/MoviesDetail';


import Header from 'componets/Header';
import Footer from 'componets/Footer';

import './styles.scss';

function App() {
  return (
    <div className="mainWrapper">
      <Header/>
        <main>
          <Switch>
              <Route exact path={routeMainPage()} component={MainPage}/>
              <Route exact path={routeCategoryPage()} component={CategoryPage}/>
              <Route exact path={routeContacts()} component={Contacts}/>
              <Route exact path={routeSearchPage()} component={SearchPage}/>
              <Route exact path={routeMoviesDetail()} component={MoviesDetail}/>
              <Redirect 
                to={{
                  pathname:routeMainPage()
                }}
              />
          </Switch>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
