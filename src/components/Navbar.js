import React from "react";
import Headroom from "react-headroom";
import logo from "../images/logo.png";
import scrollToElement from "scroll-to-element";
import { setSidebar } from "../actions/sidebarAction";
import { setLanguage } from "../actions/languageAction";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      display: "none"
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

  onChangeLanguage = () => {
    if (this.props.language.language === "en") {
      localStorage.setItem("lynch_website_language", "ch");
      this.props.dispatch(setLanguage("ch"));
    } else {
      localStorage.setItem("lynch_website_language", "en");
      this.props.dispatch(setLanguage("en"));
    }
  };

  render() {
    return (
      <div className="navbar-container top">
        <Headroom
          style={{
            maxHeight: "75px",
            display: this.state.display,
            background: "transparent"
          }}
          onPin={() => this.setState({ display: "block" })}
        >
          <nav className="navbar navbar-expand-lg transparent navbar-inverse justify-content-between ">
            <div className="logo" onClick={this.onClickLogo}>
              <img
                src={logo}
                className="ml-5 nav-logo"
                style={{ width: "50px" }}
              />
              Lynch
            </div>
            <div className="nav-right">
              <div class="dropdown mr-3">
                <button class="dropbtn">
                  {this.props.language.language == "en"
                    ? "English"
                    : "简体中文"}
                </button>
                <div class="dropdown-content">
                  <p href="#" onClick={this.onChangeLanguage}>
                    {this.props.language.language == "ch"
                      ? "English"
                      : "简体中文"}
                  </p>
                </div>
              </div>
              <i
                className="fas fa-bars mr-5 sidebar-icon"
                onClick={this.onClickBar}
                ref={node => (this.node = node)}
              />
            </div>
          </nav>
        </Headroom>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect(mapStateToProps)(Navbar);
