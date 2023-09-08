import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.educationData.map(function (education) {
      return (
        <div key={education.school_name}>
          <div className="two columns">
            <a href={education.school_link}><img src={"http://localhost:8080/v1/image?name=" + education.school_pic} alt={education.school_name} style={{height: "90%"}}></img></a>
          </div>
          <h3>{education.school_name}</h3>
          <p className="info">
            {education.diploma} <span>&bull;</span>
            <em className="date">{education.graduation_time}</em>
          </p>
          <p>{education.desc}</p>
        </div>
      );
    });

    const work = this.props.data.workData.map(function (work) {
      return (
        <div key={work.company_name}>
          <div className="two columns">
            <a href={work.company_link}><img src={"http://localhost:8080/v1/image?name=" + work.company_pic} alt={education.school_name} style={{height: "90%"}}></img></a>
          </div>
          <h3>{work.company_name}</h3>
          <p className="info">
            {work.role}
            <span>&bull;</span> <em className="date">{work.start_time} - {work.end_time}</em>
          </p>
          <p>{work.desc}</p>
        </div>
      );
    });

    const skillSorted = this.props.data.skillData.sort(function(a, b) {
      return ((a.skill_value < b.skill_value) ? 1 : ((a.skill_value > b.skill_value) ? -1 : 0))
    })
    const skills = skillSorted.map((skill) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skill.skill_name.toLowerCase();
      const width = skill.skill_value.toString() + "%";

      return (
        <li key={skill.skill_name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skill.skill_name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
