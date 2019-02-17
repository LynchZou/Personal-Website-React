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
          <h4 className="text-center project-title">Projects</h4>
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
                A Blog Engine powered by various web technologes including but
                not limited to React, Node, MongoDB, Express, Cloudinary and
                Redis. It has all functionalities a commercial blog website has
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
                A calculator that solves problems with different algorithm,
                including BFS/DFS for graph traversals and Genetic Algorithm for
                Travelling Salesperson problem
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
                A standalone Python program with both Graphical User Interface
                and Command Line Interface, and is able to grab data related to
                Japanese animations from the Internet
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
                A web project that performs as a love wall. Users can post their
                lovers on LoveWall and if there is a match, meaning they love
                each other, the website will forward a message to both of them
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
                This is the polished version of my personal website. Besides
                HTML/CSS/JS, I use React (Redux) for this project and switch
                from MySQL to Firebase firestore.
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
                A team web project that allows users to create or attend or
                comment or follow nearby food events. Users need to log in with
                their Google account. Final project of CSCI-201.
              </p>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
