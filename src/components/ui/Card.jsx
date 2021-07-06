//Our main goal is to create a custom component like <Card> ........ content ..... <Card /> such that this card component can apply the style we are going to apply to the thing
//If we just put in a Card tag around the content it swallows the whole content and hence we are going to use the props.children which is a special prop which acceots the content between the opening and closing tags 
//Value stored in the children props is the value between the opening and closing tags

import classes from './Card.module.css';

function Card(props){
    return <div className = {classes.card}>
    {props.children}
    </div>
}
export default Card;