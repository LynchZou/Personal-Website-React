import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Index from "./components/Index";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { setSidebar } from "./actions/sidebarAction";
import { connect } from "react-redux";

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
        <Sidebar />
        <Index />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <footer className="text-center">
          Copyright © Lynch Zou 2019 | Contact: +1 (213)713-7527
        </footer>
      </div>
    );
  }
}

export default connect()(App);
