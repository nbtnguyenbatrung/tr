import React from "react";
import Menu from "./Menu";
import '../css/MInibblogs.scss';

class Miniblogs extends React.Component{
    render(){
        return(
            <div className="nav">
                <h3>
                    <a href="/Home"> <h3>Denali</h3> </a>
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