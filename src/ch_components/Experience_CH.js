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

export default class Experience_CH extends React.Component {
  render() {
    return (
      <div className="experience">
        <h4 className="text-center experience-title">经历</h4>
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
              苏州星海实验中学
            </h4>
            <br />
            <ul>
              <li>一不小心得过一次奖学金</li>
              <li>完成了【高中没谈过恋爱】的成就</li>
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
              兼职助教
            </h4>
            <span className="subtitle">苏州新东方学校</span>
            <ul>
              <br />
              <li>托福助教</li>
              <li>在情人节收到了学生的巧克力</li>
              <li>期间收到了学姐的好人卡</li>
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
              南加州大学
            </h4>
            <br />
            <ul>
              <li>硕士学位在读</li>
              <li>计算机科学专业</li>
              <li>累计GPA: 3.77/4.0</li>
              <li>快要达成【大学单身四年】的成就</li>
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
              研究助理
            </h4>
            <span className="subtitle">USC Robotics Interaction Lab</span>
            <ul>
              <br />
              <li>在ROS下，使用A*算法和RRT算法进行路径搜寻</li>
              <li>使用计算机视觉的知识，将被扭曲的图片转换成未扭曲化的图片</li>
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
