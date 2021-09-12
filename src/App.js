import React, {useState} from 'react'
import {Route, Switch, HashRouter} from "react-router-dom";

import './App.css';

import HomePage from './containers/HomePage/HomePage';
import OffersPage from './containers/OffersPage/OffersPage';
import LittersPage from './containers/LittersPage/LittersPage'
import CatsPage from './containers/CatsPage/CatsPage'
import Layout from './containers/Layout/Layout';

import SearchContext from './SearchContext';

function App() {
  const [searchString, setSearchString] = useState('');

  return (
    <SearchContext.Provider value ={[searchString, setSearchString]}>
      <React.Fragment>

          <HashRouter>

          <Layout />

            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/offers" component={OffersPage} exact/>
              <Route path="/litters" component={LittersPage} exact/>
              <Route path="/cats" component={CatsPage} exact/>
            </Switch>

          </HashRouter>

      </React.Fragment>
    </SearchContext.Provider>

  );
}

export default App;
