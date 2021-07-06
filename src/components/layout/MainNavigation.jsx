import { useContext } from 'react';

import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

import FavouritesContext from '../../store/favourites-context';

function MainNavigation(){
    const favouritesCtx = useContext(FavouritesContext);

    return (<div>
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li> <Link to='/'> All-Meetups </Link> </li>
                    <li> <Link to='/new-meetups'> Create New Meetups </Link> </li>
                    <li><Link to='/favourites'>My Favourites
                    <span className = {classes.badge}>{favouritesCtx.totalFavourites}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    </div>
);
}
export default MainNavigation;