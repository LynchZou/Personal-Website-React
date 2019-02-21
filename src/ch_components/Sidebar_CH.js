import React from "react";
import classnames from "classnames";
import scrollToElement from "scroll-to-element";
import { setSidebar } from "../actions/sidebarAction";
import { connect } from "react-redux";
import onClickOutside from "react-onclickoutside";
import wechat from "../images/wechat.jpeg";

class Sidebar_CH extends React.Component {
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
              简介
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("experience")}
            >
              经历
            </a>
          </div>
          <div className="link-container">
            <a href={() => false} onClick={() => this.onGotoLocation("skills")}>
              技术
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("projects")}
            >
              项目
            </a>
          </div>
          <div className="link-container">
            <a
              href={() => false}
              onClick={() => this.onGotoLocation("contact")}
            >
              联系
            </a>
          </div>
          <div className="link-container">
            <a href="http://lynchzou0114.com/blogs/blog.html" target="_blank">
              博客
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
        <img
          src={wechat}
          alt="wechat"
          style={{ width: "60%", display: "block" }}
          className="mt-5 mx-auto"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar
  };
};

export default connect(mapStateToProps)(onClickOutside(Sidebar_CH));
