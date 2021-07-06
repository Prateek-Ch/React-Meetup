//Use Switch to render only one of the routes and not match it with others too so for rendering atmost one page
//Use the exact parameter to let it render the path which matches entirely and not just the starting match

import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';


function App() {

  //localhost:3000/.....

  return(
    <Layout>
     <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>

      <Route path='/new-meetups'>
        <NewMeetupsPage />
      </Route>

      <Route path='/favourites'>
        <FavouritesPage />
      </Route>
     </Switch>
  </Layout>
  );
}

export default App;
