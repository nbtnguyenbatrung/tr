import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import '../css/MInibblogs.scss';

class Miniblogs extends React.Component{
    render(){
        return(
            <div className="nav">
                <h3>
                    <Link to="/Home"> <h3>Denali</h3> </Link>
                </h3>
                
                <ul className="nav__link">
                    <li> <Menu name = "Home"/> </li>
                    <li> <Menu name = "About"/> </li>
                    <li> <Menu name = "Contact"/> </li>
                </ul>
            </div>
        );
    }
}
export default Miniblogs;