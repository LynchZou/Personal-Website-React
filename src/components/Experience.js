import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaSchool as School,
  FaChalkboardTeacher as Teacher,
  FaStar as StarIcon
} from "react-icons/fa";
import { IoIosSchool as College } from "react-icons/io";
import { GiRobotGolem as Robot } from "react-icons/gi";
import xinghai from "../images/xinghai.jpg";
import xdf from "../images/xdf.jpg";
import usc from "../images/tommy_trojan.jpg";
import lab from "../images/interaction_lab.png";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <h4 className="text-center experience-title">Experience</h4>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09.2013 - 06.2016"
            iconStyle={{ background: "skyblue", color: "#fff" }}
            icon={<School />}
          >
            <h4
              className="vertical-timeline-element-title"
              onClick={() => window.open("http://xhsy.sipedu.org/")}
            >
              Suzhou Xinghai Experimental Middle School
            </h4>
            <br />
            <ul>
              <li>Winning Scholarship for one semester</li>
              <li>Cumulative GPA: 3.68/4.0</li>
            </ul>
            <img src={xinghai} className="exp-image" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11.2015 - 06.2016"
            iconStyle={{ background: "pink", color: "#fff" }}
            icon={<Teacher />}
          >
            <h4
              className="vertical-timeline-element-title"
              onClick={() => window.open("http://suzhou.xdf.cn/")}
            >
              Teaching Asistant
            </h4>
            <span className="subtitle">Suzhou New Oriental School</span>
            <ul>
              <br />
              <li>Assist teaching TOEFL</li>
              <li>Holding self-learning sessions</li>
              <li>Prepare before-class learning materials</li>
            </ul>
            <img src={xdf} className="exp-image" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="8.2016 - present"
            iconStyle={{
              background: "rgb(248, 248, 120)",
              color: "#fff"
            }}
            icon={<College />}
          >
            <h4
              className="vertical-timeline-element-title"
              onClick={() => window.open("https://www.usc.edu/")}
            >
              University of Southern California
            </h4>
            <br />
            <ul>
              <li>Bachelor of Science</li>
              <li>Computer Science major</li>
              <li>Cumulative GPA: 3.77/4.0</li>
            </ul>
            <img src={usc} className="exp-image" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11.2019 - present"
            iconStyle={{
              background: "violet",
              color: "#fff"
            }}
            icon={<Robot />}
          >
            <h4
              className="vertical-timeline-element-title"
              onClick={() =>
                window.open("http://robotics.usc.edu/interaction/index.php")
              }
            >
              Research Assistant
            </h4>
            <span className="subtitle">USC Robotics Interaction Lab</span>
            <ul>
              <br />
              <li>ROS simple pathfinding using A*</li>
              <li>
                Converting distorted image back using Computer Vision knowledge
              </li>
            </ul>
            <img src={lab} className="exp-image" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
        <br />
      </div>
    );
  }
}
