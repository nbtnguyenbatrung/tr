import React from "react";
import "../css/information.scss";
class Information extends React.Component{
    render() {
        return (
            <div className="information">
                <div className="information__image">
                    <img className="information__image--avartar" src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg" alt="anh"/>
                </div>
                <div className="information__content">
                    Denili is a simple responsive blog template . Easily add new posts using the Editor or change layout and design using the Designer
                </div>
                <hr style={{width : '40%'}}/>
                <div className="information__future">
                    <div className="information__future--title">
                        Featured Posts :
                    </div>
                    <div className="information__future--content1">
                        According a funnily until pre-set or arrogant well cheerful 
                    </div>
                    <div className="information__future--content2">
                        Overlaid the jeepers uselessly much excluding
                    </div>
                </div>
                <hr style={{width : '40%'}}/>
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
        );
    }
}

export default Information;