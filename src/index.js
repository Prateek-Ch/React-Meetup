import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

//Favourites context provider.
//Since multiple components over the application is interested in it then we wrap all the components around it.

import { FavouritesContextProvider }  from './store/favourites-context';

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById('root'));
