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

// const Detail = () => {
//     const [news, setnews] = useState([]);
//     let { id } = useParams();

//     useEffect(() => {
//         // const fetch = async ()=>{
//         axios
//             .get("/api/new/7f0060eb-2ea4-4b7a-b1e6-15e53a1156fe", {
//                 headers: {
//                     apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//                 }
//             }).then(
//                 res => {
//                     setnews(res.data);
//                 }
//             )
//         // }

//         // fetch();

//     }, []);
//     console.log(news);
//     return (
//         // <Detail ne={news} />
//         <div className="detail">
//             <div className="detail__infor">
//                 <div className="detail__infor--me">
//                     <Information />
//                 </div>
//             </div>
//             <div className="detail__content">
//                 <div className="detail__content--details">
//                     <div className="detail__content--details-image">
//                         <img src={require(`../img/${news.image}`).default} alt="anh" />
//                     </div>
//                     <div className="detail__content--details-title">
//                         {news.title}
//                     </div>
//                     <div className="detail__content--details-date">
//                         <div className="detail__content--details-date-datetime">
//                             {news.createdate}
//                         </div>
//                         <div className="detail__content--details-date-cetogory">
//                             {news.cetogory}
//                         </div>
//                     </div>
//                     <hr style={{ width: '40%', marginLeft: '2rem' }} />
//                     <div className="detail__content--details-summary">
//                         {news.summary}
//                     </div>

//                 </div>
//                 <button>trung</button>
//             </div>

//         </div>
//     );
// }

export default Detail