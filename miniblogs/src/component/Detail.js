import React from "react";
import axios from "axios";
import Information from "./Infomation";
import '../css/detail.scss';
import {Link} from 'react-router-dom';

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: {}
        }
    }

    componentDidMount() {

        axios
            .get("/api/new/"+this.props.id, {
                headers: {
                    apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
                }
            })
            .then(res => {
                this.setState({
                    news: res.data,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    

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
                            <img src={require(`../img/hoian.jpg`).default} alt="anh" />
                        </div>
                        <div className="detail__content--details-title">
                            {this.state.news.title}
                        </div>
                        <div className="detail__content--details-date">
                            <div className="detail__content--details-date-datetime">
                                {this.state.news.createdate}
                            </div>
                            <div className="detail__content--details-date-cetogory">
                                {this.state.news.cetogory}
                            </div>
                        </div>
                        <hr style={{ width: '40%', marginLeft: '2rem' }} />
                        <div className="detail__content--details-summary">
                            {this.state.news.content}
                        </div>

                    </div>
                    <Link to="/Home"><button> <h2> <i className="fas fa-arrow-left"></i> ALL posts </h2></button></Link>
                </div>

            </div>
        );

    }
}


export default Detail