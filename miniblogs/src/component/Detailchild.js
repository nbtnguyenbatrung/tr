import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import Detail from "./Detail";
import axios from "axios";
import { listnew } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

// const Detailchild = (props) => {
//     const [news,setbooks] = useState([]);
//     let { id } = useParams();

//     useEffect (()=>{
//         const fetch = async ()=>{
//             const res =await axios.get('http://localhost:8080/api/new/'+id,{
//                 headers: {
//                     apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
//                 }
//             });
//             setbooks(res.data);
//         }

//         fetch();

//     },[id]);
//     const shownew = []
//     shownew.unshift(news)
//     return (
//         <Detail id={id} news={shownew} />
//     );
// }

const Detailchild = () => {
    let dispatch = useDispatch()
    let { id } = useParams()
    const { newss } = useSelector((state) => state.data)
    
    useEffect(() => {
        dispatch(listnew(id))
    }, [id])

    
    return(
        <Detail news={newss} />
    )

}
export default Detailchild