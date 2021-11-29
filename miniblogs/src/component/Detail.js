import React from "react";
import Information from "./Infomation";
import '../css/detail.scss';
import { Link } from 'react-router-dom';

class Detail extends React.Component {

    render() {
        
        const shownews = this.props.news.map((news, index) => {

            return (
                <div className="detail">
                    <div className="detail__infor">
                        <div className="detail__infor--me">
                            <Information />
                        </div>
                    </div>
                    <div className="detail__content">
                        <div className="detail__content--details">
                            <div className="detail__content--details-image">
                                <img src={(`${news.image}`)} alt="anh" />
                            </div>
                            <div className="detail__content--details-title">
                                {news.title}
                            </div>
                            <div className="detail__content--details-date">
                                <div className="detail__content--details-date-datetime">
                                    {news.createdate}
                                </div>
                                <div className="detail__content--details-date-cetogory">
                                    {news.cetogory}
                                </div>
                            </div>
                            <hr style={{ width: '40%', marginLeft: '2rem' }} />
                            <div className="detail__content--details-summary">
                                {news.content}
                            </div>

                        </div>
                        <Link to="/Home"><button> <h2> <i className="fas fa-arrow-left"></i> ALL posts </h2></button></Link>
                    </div>

                </div>
            )
        })
        return (
            <div>
                {shownews}
            </div>
        );

    }
}


export default Detail