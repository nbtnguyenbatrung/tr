import React from "react";
import Information from "./Infomation";
import '../css/contact.scss';
import axios from "axios";
class Addnew extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            news: {
                title : "",
                summary : "",
                content : "",
                image : "hoian.jpg",
                cetogory : "",

            }
        }
    };

    handletitleChange= function(e) {
        this.setState({
            news: {
                title : e.target.value,
                summary : this.state.news.summary,
                content : this.state.news.content,
                image : "hoian.jpg",
                cetogory : this.state.news.cetogory,

            }
        });
     };

     handlesummaryChange= function(e) {
        this.setState({
            news: {
                title : this.state.news.title,
                summary : e.target.value,
                content : this.state.news.content,
                image : "hoian.jpg",
                cetogory : this.state.news.cetogory,

            }
        });
     };

     handlecontentChange= function(e) {
        this.setState({
            news: {
                title : this.state.news.title,
                summary : this.state.news.summary,
                content : e.target.value,
                image : "hoian.jpg",
                cetogory : this.state.news.cetogory,

            }
        });
     };

     handlecetogoryChange= function(e) {
        this.setState({
            news: {
                title : this.state.news.title,
                summary : this.state.news.summary,
                content : this.state.news.content,
                image : "hoian.jpg",
                cetogory : e.target.value,

            }
        });
     };

     handleSubmit = (event) => {
        
        axios
          .post("http://localhost:8080/api/new", this.state.news, {
            headers: {
              apikey: "691c5597-e7d2-4c06-af49-f9369b367783",
            },
          })
          .then((response) => {
              alert(" Thêm dữ liệu thành công ")
              this.home()
            })
          .catch((error) => alert(error));
      };
     
      home = ()=> {
        window.location.href("http://localhost:3000/Home")
      }

    render(){
        return(
            <div className="contact">
                <div className="contact__infor">
                    <div className="contact__infor--me">
                        <Information/>
                    </div>
                </div>
                <div className="contact__touch">
                    <div className="contact__touch--get">
                        <div className="contact__touch--get-information">
                            <form>
                                <label>Title</label>
                                <input placeholder="Enter your Title" onChange={(event) => this.handletitleChange(event)} ></input>
                                <label>Summary</label>
                                <input placeholder="Enter your Summary" onChange={(event) => this.handlesummaryChange(event)} ></input>
                                <label>Content</label>
                                <textarea placeholder="Enter your Content" onChange={(event) => this.handlecontentChange(event)} ></textarea>
                                <label>Cetogory</label>
                                <input placeholder="Enter your Cetogory" onChange={(event) => this.handlecetogoryChange(event)} ></input>
                            </form>
                            <button onClick= {(event) => this.handleSubmit(event)}>Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Addnew;