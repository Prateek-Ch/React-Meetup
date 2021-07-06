//After adding something to favourites we have to change multiple states at once like the button of Add to Fav must change then the fvourites page must display state must have added content and so on
//Hence we have to manage the states globally for the entire project 
//This is what we will do in this part
//(read about what's redux)

//createContext cretes a context which is a js object 
//the object that createContext will return will be a react component
//give it an initial value as an argument

//FavouritesContextProvider will be a regular react component but it will have a job of providing the context to all the components that are interested in listening to the value
//provide context to every component + updating the context for every component
// .provider is a component that context provider has built in
//so wrap this component around every component that is interested in the context states

import { createContext,useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    //part below is only to help w better suggestions while coding later but servers no purpose whatsover
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props){
    
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup);
        });  
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value = {context}>
        {props.children};
    </FavouritesContext.Provider>
}

export default FavouritesContext;