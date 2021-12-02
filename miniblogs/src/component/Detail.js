import React from "react";
import Information from "./Infomation";
import '../css/detail.scss';
import { Link } from 'react-router-dom';

class Detail extends React.Component {

    render() {
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
                            <img src={(`${this.props.news.image}`)} alt="anh" />
                        </div>
                        <div className="detail__content--details-title">
                            {this.props.news.title}
                        </div>
                        <div className="detail__content--details-date">
                            <div className="detail__content--details-date-datetime">
                                {this.props.news.createdate}
                            </div>
                            <div className="detail__content--details-date-cetogory">
                                {this.props.news.cetogory}
                            </div>
                        </div>
                        <hr style={{ width: '40%', marginLeft: '2rem' }} />
                        <div className="detail__content--details-summary">
                            {this.props.news.content}
                        </div>

                    </div>
                    <Link to="/"><button> <h2> <i className="fas fa-arrow-left"></i> ALL posts </h2></button></Link>
                </div>

            </div>
        )


    }
}



export default Detail