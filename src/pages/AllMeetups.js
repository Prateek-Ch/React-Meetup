//ALL FILES IN PAGES ARE FOR ROUTING ONLY TO BE USED AFTER INSTALLING REACT-ROUTER-DOM AS A DEPENDENCY
//First wrap the App component in index file around a Browser Router Tag
//Then in the app file use it to create Routes using browser-router-dom

//jsx allows us to render the array correctly in the browser hence we can use that feature to render list items in our browser

//key is to remove a warning in the browser as react requires us to render items correctly
//To translate an array into an array of different data we use the map function already available in js
//Map allows us to execute an function on every element of that array and it will get this element as the input and then we return a tranformed data. SO  result of that map function becomes an array full of transformed data 

import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];


function AllMeetupsPage(){
    //To fetch data from dbs. Here we will be using the GET method to fetch data hence no need for additional configurations
    //to get the response we use then method and then pass in an anonymous function to then and we get the response object as argument. then returns a promise which results to the actual response at some point in time
    //Even .json returns a promise and we will have to wait for that promise to finish and hence we will need another .then method for that response.json

    //We can ofc add async await to this allmeetupspage and fetch function but then it would no longer be a valid react component hence we can use like a temporary loadspinner sort of to wait for the entire thing to finish fetching the data and then update the state of that loadspinner so we can use useState (isLoading part)

    //Since useState reevaluates the state once updated it will cause in infinite loop over the fetching data part and that needs to be fixed and hence we use the useEffect hook
    //Hence everytime we try to run the component function the useState always runs w it.
    //useEffect allows us to run some code under certain conditions it takes in 2 params a function and an array of dependencies
    //the first function passed to useEffects will be executed by it in a certain condition
    //array will help us in prividing those conditions. So the function will ONLY execute if the value of that array changes

    //Since we have no external dependencies like a prop or something then we don't have to add anything to the array and leave it empty


    //... is just a spread operator to basically have all key value pair from one object to other

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=>{
      setIsLoading(true);
      fetch('https://react-meetup-6c88a-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      
      const meetups = [];

      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
    },[]);

    
    if(isLoading){
      return(
        <section>
          <div>
           <p> Is Loading ... </p> 
          </div>
        </section>
      );
    }
    return( <div>
            <section>
                <h1>All Meetups</h1>
                <MeetupList items = {loadedMeetups}/>
            </section>
            </div>
     );
 }

export default AllMeetupsPage;