//ALL FILES IN PAGES ARE FOR ROUTING ONLY TO BE USED AFTER INSTALLING REACT-ROUTER-DOM AS A DEPENDENCY
//First wrap the App component in index file around a Browser Router Tag
//Then in the app file use it to create Routes using browser-router-dom

//fetch is a default js function and it is built into js


//We use useHistory hook to navigate the user to a certain page after the user has successfuly submitted the form
//history.push method pushes a new page on the stack of a new page its like pressing the back button on chrome
//but we use history.replace() and we can go to whatever page we want
//since we know fetch will return a promise we can use that and use the .then method on it to navigate away 
// instead of .then we can also use async await ofc 

import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-6c88a-default-rtdb.firebaseio.com/meetups.json',
        {method: 'POST',
         body: JSON.stringify(meetupData),
         headers: {
             'Content-Type': 'application/json'
         }
        }
        ).then(()=>{
            history.replace('/');
        }); 

    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
        </section>
    );
}
export default NewMeetupsPage;