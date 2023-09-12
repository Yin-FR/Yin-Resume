import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import $ from "jquery";
import "../config"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      haha: true
    };

  }
  sendMail = () => {
    
    const name = $("#contactName").val();
    const email = $("#contactEmail").val();
    const subject = $("#contactSubject").val();
    const message = $("#contactMessage").val();
    const apiUrl = global.config.apiUrl.stringValue;
    const receiverBody = {
      body: "Someone contacted you.\nName: " + name + "\nMail: " + email + "\nSubject: " + subject + "\nBody: " + message,
      mail: "admin",
      title: name + " contact you!"
    }
    const requestBody = JSON.stringify({receiver: receiverBody});
    const senderBody = {
      body: "Thanks for your message, we will return to you as soon as possible !",
      mail: email,
      title: "Thanks for your message !"
    }
    const senderRequestBody = JSON.stringify({receiver: senderBody});
    console.log(apiUrl);
    $.ajax({
      type: 'POST',
      url: apiUrl + "/mail/send",
      contentType: "application/json",
      data: requestBody,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ success: true });
      },
      error: (xhr, status, err) => {
        this.setState({ success: false })
      }
    });
    $.ajax({
      type: 'POST',
      url: apiUrl + "/mail/send",
      contentType: "application/json",
      data: senderRequestBody,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ success: true });
      },
      error: (xhr, status, err) => {
        this.setState({ success: false })
      }
    });
  }

  

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const address = this.props.data.address
    const phone = this.props.data.phone;
    const phonePrefix = this.props.data.phone_prefix
    const message = "If you are interested, please feel free to contact me.";

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  
                </fieldset>
              </form>
              <button  id="submitButton" className="submit" onClick={this.sendMail}>Submit</button>
              { this.state.success ? <i id="submit-success" style={{color: "green", marginLeft: "0.5em"}} className="fa fa-check"></i> : null }
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {address}
                  <br />
                  <span>+{phonePrefix} {phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
