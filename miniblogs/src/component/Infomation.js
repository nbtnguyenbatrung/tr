import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import "../css/information.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { listnews, listsearchnews } from "../redux/actions";

// class Information extends React.Component{


//     constructor(props){
//         super(props);
//         this.state = {
//             new: []
//         }
//     }

//     componentDidMount(){
//         axios
//             .get("http://localhost:8080/api/new", {
//                 headers: {
//                     apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//                 }
//             })
//             .then(res => {
//                 this.setState({
//                     new: res.data,
//                 })
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }


//     render() {
//         const randomFeatured = this.state.new.sort(() => Math.random() - 0.5).slice(0 ,5);
//         const Featured = randomFeatured.map((news, index)=>{
//             return (
//                 <div className="information__future--content1">
//                         <Link to={"/Detail/" + news.id }>{news.title}</Link>
//                 </div>
//             );
//         });
//         return (
//             <div className="information">
//                 <div className="information__image">
//                     <img className="information__image--avartar" src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg" alt="anh"/>
//                 </div>
//                 <div className="information__content">
//                     Denili is a simple responsive blog template . Easily add new posts using the Editor or change layout and design using the Designer
//                 </div>
//                 <hr style={{width : '40%'}}/>
//                 <div className="information__future">
//                     <div className="information__future--title">
//                         Featured Posts :
//                     </div>
//                     {Featured}
//                 </div>
//                 <hr style={{width : '40%'}}/>
//                 <div className="information__contact">
//                     <div className="information__contact--fa">
//                         <i className="fa-brands fa-facebook-square"></i>
//                         <i className="fa-solid fa-camera"></i>
//                         <i className="fa-brands fa-twitter"></i>
//                         <i className="fa-brands fa-linkedin-in"></i>
//                     </div>
//                     <div className="information__contact--text">
//                         BUILT WITH WEBFLOW
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const Information = () => {
    let dispatch = useDispatch()
    const { news } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(listnews())
    }, [])

    return (
        <div className="information">
            <div className="information__image">
                <img className="information__image--avartar" src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg" alt="anh" />
            </div>
            <div className="information__content">
                Denili is a simple responsive blog template . Easily add new posts using the Editor or change layout and design using the Designer
            </div>
            <hr style={{ width: '40%' }} />
            <div className="information__future">
                <div className="information__future--title">
                    Featured Posts :
                </div>
                {news.slice(0 ,5).map((news) => (
                    <div className="information__future--content1">
                        <Link to={"/Detail/" + news.id}>{news.title}</Link>
                    </div>
                ))}
            </div>
            <hr style={{ width: '40%' }} />
            <div className="information__contact">
                <div className="information__contact--fa">
                    <i className="fa-brands fa-facebook-square"></i>
                    <i className="fa-solid fa-camera"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="information__contact--text">
                    BUILT WITH WEBFLOW
                </div>
            </div>
        </div>
    )
}
export default Information;