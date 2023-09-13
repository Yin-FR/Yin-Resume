import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ChatBox from "./Components/ChatBox"
import "./config"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      descData: {},
      educationData: [],
      workData: [],
      skillData: [],
      projectData: [],
      networkData: []
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    const apiUrl = global.config.apiUrl.stringValue;
    $.ajax({
      url: apiUrl + "/resume/descs",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ descData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    $.ajax({
      url: apiUrl + "/resume/educations",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ educationData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    $.ajax({
      url: apiUrl + "/resume/works",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ workData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    $.ajax({
      url: apiUrl + "/resume/skills",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ skillData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    $.ajax({
      url: apiUrl + "/project/projects",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ projectData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
    $.ajax({
      url: apiUrl + "/resume/social_networks",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ networkData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.descData[0]} />
        <About data={this.state.descData[0]} />
        <Resume data={{educationData: this.state.educationData, workData: this.state.workData, skillData: this.state.skillData}} />
        <Portfolio data={this.state.projectData} />
        <Contact data={this.state.descData[0]} />
        <Footer data={this.state.networkData} />
        <ChatBox />
      </div>
    );
  }
}

export default App;
