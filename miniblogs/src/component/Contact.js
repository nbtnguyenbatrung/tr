import React from "react";
import axios from "axios";
import Information from "./Infomation";
import '../css/contact.scss';
class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                id : "",
                name : "",
                email : "",
                message : "",
            }
        }
    }

    componentDidMount() {

        axios
            .get("/api/contact", {
                headers: {
                    apikey: '691c5597-e7d2-4c06-af49-f9369b367783',
                }
            })
            .then(res => {
                this.setState({
                    new: {
                        id : res.data.id,
                        name : res.data.name ,
                        email : res.data.email ,
                        message : res.data.message ,
                    },
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    handlenameChange= function(e) {
        this.setState({
            contact: {
                name : e.target.value,
                email : this.state.contact.email,
                message : this.state.contact.message,
            }
        });
     };

     handleemailChange= function(e) {
        this.setState({
            contact: {
                name : this.state.contact.name,
                email : e.target.value,
                message : this.state.contact.message,
            }
        });
     };

     handlemessageChange= function(e) {
        this.setState({
            contact: {
                name : this.state.contact.name,
                email : this.state.contact.email,
                message : e.target.value,
            }
        });
     };

    render() {
        return (
            <div className="contact">
                <div className="contact__infor">
                    <div className="contact__infor--me">
                        <Information/>
                    </div>
                </div>
                <div className="contact__touch">
                    <div className="contact__touch--get">
                        <div className="contact__touch--get-information">
                            <h2>Get in touch</h2>
                            <span> Nullam id color nibh ultriccies vehicula ut id elit . Morbi leo risus , porta ac , vestibulum at 
                                eros . NUlla vitae elit libero , a pharetra augue . Nulla vitae libero , a pharetra ague . Sed posuere
                                consectetur est lobortis . Fusce dapibus , tellus ac cursus commde , tortor mauris condimentum nibh , ut
                                fermentum massa justo sit amet risus.
                            </span>
                            <form>
                                <label>Name</label>
                                <input value={this.state.contact.name} placeholder="Enter your name" onChange={(event) => this.handlenameChange(event)} ></input>
                                <label>Email Address </label>
                                <input value={this.state.contact.email} placeholder="Enter your email" onChange={(event) => this.handleemailChange(event)} ></input>
                                <label>Message</label>
                                <textarea value={this.state.contact.message} placeholder="Enter your message" onChange={(event) => this.handlemessageChange(event)} ></textarea>
                            </form>
                            <button>Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;