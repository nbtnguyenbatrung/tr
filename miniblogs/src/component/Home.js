
import Information from "./Infomation";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import '../css/home.scss';
import New from "./New";
import { loadNewsStart ,loadNewsSuccess, getSearchNewStart , getSearchNewSuccess} from "../redux/actions";

// class Home extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             new: [],
//             title: "",
//             morepost : 2,
//             shownews : []
//         };
//     }

//     componentDidMount() {

//         dispatch(listsearchnews())
//         // axios
//         //     .get("http://localhost:8080/api/new", {
//         //         headers: {
//         //             apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//         //         }
//         //     })
//         //     .then(res => {
//         //         this.setState({
//         //             new: res.data.reverse(),
//         //             shownews : res.data.reverse().slice(0,4)
//         //         })

//         //     })
//         //     .catch(err => {
//         //         console.log(err);
//         //     });
//     }

//     handletitleChange = function (e) {
//         this.setState({
//             title: e.target.value
//         });
//     };

//     handleSubmit = (event) => {

//         axios
//             .get("http://localhost:8080/api/news", {
//                 headers: {
//                     apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
//                 },
//                 params: {
//                     SearchNew: this.state.title
//                 }
//             })
//             .then((response) => {
//                 this.setState({
//                     new: response.data.reverse(),
//                     shownews : response.data.reverse().slice(0,4),
//                     morepost : 2

//                 })
//             })
//             .catch((error) => alert(error));
//     };

//     handleSubmitMorePost = () => {
//         var totalpage1 = Math.floor(this.state.new.length/4 )
//         var  totalpage = totalpage1*4 < this.state.new.length ? totalpage1 + 1 : totalpage1
//         if(this.state.morepost === totalpage + 1){
//             alert(" het bai viet roi ")
//         }else{
//             let end = this.state.morepost*4;
//             this.setState({
//                 morepost : this.state.morepost + 1 ,
//                 shownews : this.state.new.slice(0 , end)
//             })
//         }

//     };


//     render() {
//         console.log(this.state.shownews);
//         const newget = this.state.shownews.map((news, index) => {
//             return (
//                 <frameElement>
//                     <New new={news} />
//                 </frameElement>
//             );
//         });

//         return (
//             <div className="miniblog">
//                 <div className="miniblog__search">
//                     <input type="text" placeholder="title" onChange={(event) => this.handletitleChange(event)}></input>
//                     <button onClick={(event) => this.handleSubmit(event)}>Search</button>
//                 </div>
//                 <div className="miniblog__infor">
//                     <div className="miniblog__infor--me">
//                         <Information />
//                     </div>

//                 </div>
//                 <div className="miniblog__posts">
//                     {newget}
//                     <button onClick={() => this.handleSubmitMorePost()} >
//                         <h2>More posts <i className="fa-solid fa-arrow-right"></i> </h2>
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }


const Home = () => {
    const dispatch = useDispatch()
    const [title, settitle] = useState("");
    const { news } = useSelector(state => state.data)

    useEffect(() => {
        
        dispatch(loadNewsStart())
        
    }, [])


    const handletitleChange = function (e) {
        settitle(e.target.value)
    };

    const handleSubmit = (event) => {
        dispatch(getSearchNewStart(title))
    };

    return (
        
        <div className="miniblog">
            <div className="miniblog__search">
                <input type="text" placeholder="title" onChange={(event) => handletitleChange(event)}></input>
                <button onClick={(event) => handleSubmit(event)}>Search</button>
            </div>
            <div className="miniblog__infor">
                <div className="miniblog__infor--me">
                    <Information />
                </div>

            </div>
            <div className="miniblog__posts">
            
                { news && news.map((news) => (
                    <New new={news}/>
                    ))
                }
                <button  >
                    <h2>More posts <i className="fa-solid fa-arrow-right"></i> </h2>
                </button>
            </div>
        </div>
    )

}
export default Home;