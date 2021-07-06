//To render one meetup item per object in the meetups array which is also configured

import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props){
    return(
        <ul className = {classes.list}>
            {props.items.map(item => <MeetupItem key={item.id} 
            id = {item.id}  
            image = {item.image}
            title = {item.title}
            address = {item.address}
            description = {item.description} />)}
        </ul>
    );
}

export default MeetupList;