import React, { Component } from "react";
import Fade from "react-reveal";
import "../config"

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const apiUrl = global.config.apiUrl.stringValue
    const name = this.props.data.name;
    const profilepic = apiUrl + "/image?name=" + this.props.data.profile;
    const bio = this.props.data.desc;
    const address = this.props.data.address;
    const phone = "+" + this.props.data.phone_prefix + " " + this.props.data.phone;
    const email = this.props.data.mail;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {address}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
