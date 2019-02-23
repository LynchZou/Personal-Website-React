import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Index from "./components/Index";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { connect } from "react-redux";

import Sidebar_CH from "./ch_components/Sidebar_CH";
import Index_CH from "./ch_components/Index_CH";
import Profile_CH from "./ch_components/Profile_CH";
import Experience_CH from "./ch_components/Experience_CH";
import Skills_CH from "./ch_components/Skills_CH";
import Projects_CH from "./ch_components/Projects_CH";
import Contact_CH from "./ch_components/Contact_CH";

// import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
// import "bootstrap-material-design/dist/js/bootstrap-material-design.js.map";
import "bootstrap/scss/bootstrap.scss";
import "./styles/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.props.language.language == "en" ? (
          <div>
            <Sidebar />
            <Index />
            <Profile />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </div>
        ) : (
          <div>
            <Sidebar_CH />
            <Index_CH />
            <Profile_CH />
            <Experience_CH />
            <Skills_CH />
            <Projects_CH />
            <Contact_CH />
          </div>
        )}
        <footer className="text-center">
          Copyright © Lynch Zou 2019 | Contact: +1 (213)713-7527
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language
});

export default connect(mapStateToProps)(App);
