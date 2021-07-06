//ALL FILES IN PAGES ARE FOR ROUTING ONLY TO BE USED AFTER INSTALLING REACT-ROUTER-DOM AS A DEPENDENCY
//First wrap the App component in index file around a Browser Router Tag
//Then in the app file use it to create Routes using browser-router-dom

import { useContext } from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage(){
    const favouriteCtx = useContext(FavouritesContext);

    let content;

    if(favouriteCtx.totalFavourites==0){
        content  = <p>You have added no Favourites yet.</p>
    }
    else{
        content =  <MeetupList items={favouriteCtx.favourites}/>
    }

    return(
        <section>
            <h1>My Favourites</h1>
            {content}           
        </section>
    );
}

export default FavouritesPage;