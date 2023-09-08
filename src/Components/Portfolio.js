import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import "../config"

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const apiUrl = global.config.apiUrl.stringValue

    const projects = this.props.data.map(function (projects) {
      let projectImage = apiUrl + "/image?name=" + projects.pic;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.name} src={projectImage} style={{ height: "7em"}}/>
            <div style={{ textAlign: "center" }}><a href={projects.github}>{projects.name}</a></div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
