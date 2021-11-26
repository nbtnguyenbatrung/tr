import React from "react";
import '../css/new.scss';
import {Link} from 'react-router-dom';
function New(props){
    return(
        <div className="new">
            <div className="new__image">
                <img src={require(`../img/${props.new.image}`).default} alt="anh"/>
            </div>
            <div className="new__content">
                <div className="new__content--title">
                    {props.new.title}
                </div>
                <div className="new__content--date">
                    <div className="new__content--date-datetime">
                        {props.new.createdate}
                    </div>
                    <div className="new__content--date-cetogory">
                        {props.new.cetogory}
                    </div>
                </div>
                <div className="new__content--summary">
                    {props.new.summary}
                    &ensp; <Link to={"/Detail/" + props.new.id }> Read more...</Link>
                </div>
            </div>
        </div>
    );
}
export default New;
