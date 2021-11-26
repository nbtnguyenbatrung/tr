import React from "react";
import Information from "./Infomation";
import '../css/about.scss';
import {Link} from 'react-router-dom';
class About extends React.Component{
    render(){
        return(
            <div className="about">
                <div className="about__infor"> 
                    <Information/>
                </div>
                <div className="about__meleft">
                    <div className="about__meleft--me">
                        <div className="about__meleft--me-content">
                            <h2>About me</h2>
                            <span>the rich text element allows you to create and format headings,
                                paragraphs , blockquotes , images , and video all in one place instead of
                                heving to add and format them individually . just double-click and easily create
                                content
                            </span>
                        </div>
                        <div className="about__meleft--me-here">
                            <h2>Something else here</h2>
                            <span>nguyen bat trung</span>
                        </div>
                        <button> <Link to={"/Contact"}>Get in touch</Link> </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;