import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import classnames from "classnames";

export default class Project extends React.Component {
  state = {
    showProject: false
  };

  onChange = isVisible => {
    if (isVisible) {
      this.setState({ showProject: true });
    }
  };

  render() {
    return (
      <VisibilitySensor
        onChange={this.onChange}
        partialVisibility={true}
        minTopValue={400}
      >
        <div className="projects">
          <h4 className="text-center project-title">项目</h4>
          <div className="container project-container">
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() => window.open("https://github.com/LynchZou/Bloggy")}
            >
              <i
                className="fas fa-blog project-icon mt-4 mb-3"
                style={{ color: "rgb(57, 219, 57)" }}
              />
              <p className="project-name">Bloggy</p>
              <p className="project-content">
                一个使用了多种网页开发工具的博客引擎，包括React, Node, MongoDB,
                Express, Redis等等。
                我们构建了自己的CMS，并且能够提供一个正常的商业性博客引擎的绝大多数功能（剩下的功能正在开发中）。
              </p>
            </div>
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() =>
                window.open("http://lynchzou0114.com/calculator/genetic.html")
              }
            >
              <i
                className="fas fa-calculator project-icon mt-4 mb-3"
                style={{ color: "palevioletred" }}
              />
              <p className="project-name">Algorithm Calculator</p>
              <p className="project-content">
                一个能够计算不同算法的计算器，包括
                BFS/DFS用于遍历图，遗传算法用来计算旅行商问题。具有不算是丑的用户界面，
                对于上述的所有算法都能够将结果画在图上。
              </p>
            </div>
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() =>
                window.open("https://github.com/LynchZou/Fanhao_Searcher")
              }
            >
              <i
                className="fab fa-searchengin project-icon mt-4 mb-3"
                style={{ color: "rgb(228, 228, 7)" }}
              />
              <p className="project-name">Japanese Animation Searcher</p>
              <p className="project-content">
                一个独立的Python程序，能够搜索日本动漫。这个程序本质上就是爬虫程序，需要提供
                seed来进行普通搜索以及深度搜索。同时也提供随机搜索的功能，随机搜索会根据
                内置的结果进行随机选择。
              </p>
            </div>
          </div>
          <div className="project-container container">
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() =>
                window.open("https://github.com/LynchZou/LoveWall")
              }
            >
              <i
                className="far fa-kiss-wink-heart project-icon mt-4 mb-3"
                style={{ color: "violet" }}
              />
              <p className="project-name">LoveWall</p>
              <p className="project-content">
                传说中的表白墙，依旧还在建设中。作为MERN
                stack开发，目前完成了自定义的
                CMS，预计在今年六月份之前能完工，并且会提供以Laravel为后端的
                PHP版本。该版本预计在今天五月份之前能完工。
              </p>
            </div>
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() =>
                window.open(
                  "https://github.com/LynchZou/Personal-Website-React"
                )
              }
            >
              <i
                className="fab fa-react project-icon mt-4 mb-3"
                style={{ color: "skyblue" }}
              />
              <p className="project-name">Personal Website - React</p>
              <p className="project-content">
                React(Redux)版本的个人网站，相比上一个版本的个人网站，该版本做了全面的修改。
                所有代码全部重写，所有之前的设计全部都丢弃。这是一个你没尝试过的全新版本！
              </p>
            </div>
            <div
              className={classnames("project text-center", {
                "project-animation": this.state.showProject
              })}
              onClick={() =>
                window.open("https://github.com/Stephanielpt/BentoBox")
              }
            >
              <i
                className="fas fa-utensils project-icon mt-4 mb-3"
                style={{ color: "orange" }}
              />
              <p className="project-name">BentoBox</p>
              <p className="project-content">
                一个团队的网页项目。该网站允许用户上传/浏览/修改/分享/搜索/评论/参加/关注，
                附近的食物活动。个人负责前端所有JavaScript的部分和所有的API。
              </p>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
