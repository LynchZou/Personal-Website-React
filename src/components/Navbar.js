import React from "react";
import Headroom from "react-headroom";
import logo from "../images/logo.png";
import scrollToElement from "scroll-to-element";
import { setSidebar } from "../actions/sidebarAction";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  onClickBar = () => {
    this.props.dispatch(setSidebar({ showSidebar: true }));
  };

  onClickLogo = () => {
    scrollToElement(".top", {
      offset: 0,
      ease: "out-bounce",
      duration: 1000
    });
  };

  render() {
    return (
      <div className="navbar-container top">
        <Headroom style={{ maxHeight: "65px" }}>
          <nav className="navbar navbar-expand-lg navbar-transparent bg-light justify-content-between ">
            <div className="logo" onClick={this.onClickLogo}>
              <img src={logo} className="ml-5" style={{ width: "50px" }} />
              Lynch
            </div>
            <i
              className="fas fa-bars mr-5"
              onClick={this.onClickBar}
              ref={node => (this.node = node)}
            />
          </nav>
        </Headroom>
      </div>
    );
  }
}

export default connect()(Navbar);
