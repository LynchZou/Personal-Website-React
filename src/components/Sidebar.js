import React from "react";
import classnames from "classnames";
import scrollToElement from "scroll-to-element";
import { setSidebar } from "../actions/sidebarAction";
import { connect } from "react-redux";
import onClickOutside from "react-onclickoutside";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  onGotoLocation = loc => {
    scrollToElement(`.${loc}`, {
      offset: 0,
      ease: "inCube",
      duration: 500
    });
  };

  handleClickOutside = evt => {
    this.props.dispatch(setSidebar({ showSidebar: false }));
  };

  render() {
    return (
      <div
        className={classnames("sidebar", {
          "sidebar-appear": this.props.sidebar.showSidebar
        })}
      >
        <div className="sidebar-container">
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("profile")}
            >
              Profile
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("experience")}
            >
              Experience
            </a>
          </div>
          <div className="link-container">
            <a href={() => false} onClick={() => this.onGotoLocation("skills")}>
              Skills
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("projects")}
            >
              Projects
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("contact")}
            >
              Contact
            </a>
          </div>
          <div className="link-container">
            <a href="http://lynchzou0114.com/blogs/blog.html" target="_blank">
              Blog
            </a>
          </div>
          <hr
            style={{
              width: "40%",
              marginLeft: "0",
              backgroundColor: "whitesmoke"
            }}
          />
          <div className="social-container">
            <i
              class="fab fa-github"
              onClick={() => window.open("https://github.com/lynchzou")}
            />
            <i
              class="fab fa-linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/lynchzou/")
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar
  };
};

export default connect(mapStateToProps)(onClickOutside(Sidebar));
