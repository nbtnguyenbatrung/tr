import React from "react";
import axios from "axios";
import Information from "./Infomation";
import '../css/home.scss';
import New from "./New";
import {Link} from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            new: []
        }
    }

    componentDidMount() {

        axios
            .get("/api/new", {
                headers: {
                    apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
                }
            })
            .then(res => {
                this.setState({
                    new: res.data,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        const newget = this.state.new.map((news, index) => {
            return (
                <frameElement>
                    <New new={news} />
                </frameElement>
            );
        });

        return (
            <div className="miniblog">
                <div className="miniblog__infor">
                    <div className="miniblog__infor--me">
                        <Information />
                    </div>

                </div>
                <div className="miniblog__posts">
                    {newget}
                    <Link to="/Addnew"><button>
                        <h2>More posts <i className="fa-solid fa-arrow-right"></i> </h2>
                    </button></Link>
                </div>
            </div>
        );
    }
}

export default Home;