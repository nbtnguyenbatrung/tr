import React from "react";
import Information from "./Infomation";
import '../css/contact.scss';

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

    handletitleChange: function(e) {
        this.setState({
            news: {
                title : e.target.value,
                summary : this.state.summary,
                content : this.state.content,
                image : "hoian.jpg",
                cetogory : this.state.cetogory,

            }
        });
     };

     handlesummaryChange: function(e) {
        this.setState({
            news: {
                title : this.state.title,
                summary : e.target.value,
                content : this.state.content,
                image : "hoian.jpg",
                cetogory : this.state.cetogory,

            }
        });
     };

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
                                <input placeholder="Enter your Title"></input>
                                <label>Summary</label>
                                <input placeholder="Enter your Summary"></input>
                                <label>Content</label>
                                <textarea placeholder="Enter your Content"></textarea>
                                <label>Cetogory</label>
                                <input placeholder="Enter your Cetogory"></input>
                            </form>
                            <button>Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Addnew;