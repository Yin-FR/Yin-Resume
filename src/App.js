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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      descData: {},
      educationData: [],
      workData: [],
      skillData: [],
      projectData: []
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
    $.ajax({
      url: "http://localhost:8080/v1/resume/descs",
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
      url: "http://localhost:8080/v1/resume/educations",
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
      url: "http://localhost:8080/v1/resume/works",
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
      url: "http://localhost:8080/v1/resume/skills",
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
      url: "http://localhost:8080/v1/project/projects",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ projectData: data });
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
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
