import React from "react";
import Information from "./Infomation";
import '../css/contact.scss';
class Contact extends React.Component{

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
                                <input placeholder="Enter your name"></input>
                                <label>Email Address </label>
                                <input placeholder="Enter your email"></input>
                                <label>Message</label>
                                <textarea placeholder="Enter your message"></textarea>
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