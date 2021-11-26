import React from "react";
import {Link} from 'react-router-dom';
function Menu(props){
    return (
        <Link to={"/" + props.name }><p> {props.name} </p> </Link >
    )
}

export default Menu;