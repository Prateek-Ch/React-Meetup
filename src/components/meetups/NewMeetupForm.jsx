import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

// We need to prevent the browser default after submitting the form which is to send an http request by reloading the page 
// since we are using react we dont want reloads 
// onSUbmit prop we can use to run our own logic
// All the actions like onClick and onSubmit have an EVENT object associated with them and we can use that event object to prevent the browser default onSubmit action to happen
//React automatically passes the event argument to all these onSUbmit onCLick into the functions which are being executed by us for those actions
//All these are basically from VanillaJS supported by react

//To get all the values that user entered before submitting the form we can use the concept of REFS
//Ref or references allows us to set up references to DOM Elements so we can get direct access to DOM element. We use useRef another react webhook for this purpose
//To use it we have to use another special prop built in default by react which can be used on any element (just like the key prop) and it is called the ref prop    


//We won't be building our own api but rather just use firebase as a dummy api and use its database

function NewMeetupForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        console.log(meetupData);
        props.onAddMeetup(meetupData);
    }

return(
    <Card>
        <form className={classes.form} onSubmit = {submitHandler}>
            <div className = {classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref = {titleInputRef} />
            </div>
            <div className = {classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref = {imageInputRef} />
            </div>
            <div className = {classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" ref = {addressInputRef}/>
            </div>
            <div className = {classes.control}>
                <label htmlFor="description">Meetup Description</label>
                <textarea name="description" id="description" required rows="5" ref = {descriptionInputRef}>   
                </textarea>
            </div>
            <div className = {classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
);
}

export default NewMeetupForm;