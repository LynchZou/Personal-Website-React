import React from "react";
import classnames from "classnames";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Skills_CH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      js: 70,
      cpp: 60,
      html: 70,
      css: 70,
      doc: 65,
      team: 75,
      java: 40,
      python: 55,
      php: 55,
      mysql: 40,
      mongo: 55,
      ios: 40,
      js_board: false,
      cpp_board: false,
      html_board: false,
      css_board: false,
      doc_board: false,
      team_board: false,
      java_board: false,
      python_board: false,
      php_board: false,
      mysql_board: false,
      mongo_board: false,
      ios_board: false
    };
  }

  onSetBoard = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="skills">
        <h4 className="text-center skill-title">技术</h4>
        <div className="skill-container container">
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("js_board", false)}
          >
            <p>JavaScript</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.js_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.js_board
              })}
            >
              <ul>
                <li>具有React(Redux)和Node的项目经验</li>
                <li>具有jQuery的项目经验</li>
                <li>独立+团队合作完成过复数的网页项目</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("js_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.js}
                text={`${this.state.js}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.js_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("cpp_board", false)}
          >
            <p>C++</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.cpp_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.cpp_board
              })}
            >
              <ul>
                <li>会lambda和面向函数式编程</li>
                <li>理解一些深度概念，例如Macros</li>
                <li>完成过复数的C++项目</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("cpp_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.cpp}
                text={`${this.state.cpp}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.cpp_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("html_board", false)}
          >
            <p>HTML</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.html_board
              })}
            />
            <div
              className={classnames("info-board-right js-board", {
                "info-board-animation": this.state.html_board
              })}
            >
              <ul>
                <li>了解HTML5的新特性，包括SVG</li>
                <li>了解模板殷勤，包括Blade, EJS等</li>
                <li>几乎天天都有练习</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("html_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.html}
                text={`${this.state.html}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.html_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("css_board", false)}
          >
            <p>CSS</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.css_board
              })}
            />
            <div
              className={classnames("info-board-right js-board", {
                "info-board-animation": this.state.css_board
              })}
            >
              <ul>
                <li>了解最新的CSS3特性，包括filter等</li>
                <li>了解Bootstrap之类的框架</li>
                <li>几乎天天都有练习</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("css_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.css}
                text={`${this.state.css}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.css_board
                })}
              />
            </div>
          </div>
        </div>
        <div className="skill-container container">
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("doc_board", false)}
          >
            <p>Documentation</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.doc_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.doc_board
              })}
            >
              <ul>
                <li>擅长撰写结构性强的文档</li>
                <li>擅长撰写细节性强的文档</li>
                <li>擅长解释微小的概念</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("doc_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.doc}
                text={`${this.state.doc}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.doc_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("team_board", false)}
          >
            <p>Team Work</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.team_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.team_board
              })}
            >
              <ul>
                <li>擅长团队合作</li>
                <li>有身为软件开发团队leader的经验</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("team_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.team}
                text={`${this.state.team}%`}
                styles={{
                  background: { fill: "rgb(29, 189, 29)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.team_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("python_board", false)}
          >
            <p>Python</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.python_board
              })}
            />
            <div
              className={classnames("info-board-right js-board", {
                "info-board-animation": this.state.python_board
              })}
            >
              <ul>
                <li>了解爬虫的原理和使用</li>
                <li>有过计算机视觉编程的经历</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("python_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.python}
                text={`${this.state.python}%`}
                styles={{
                  background: { fill: "rgb(228, 228, 7)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.python_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("php_board", false)}
          >
            <p>PHP</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.php_board
              })}
            />
            <div
              className={classnames("info-board-right js-board", {
                "info-board-animation": this.state.php_board
              })}
            >
              <ul>
                <li>有过使用Laravel框架的经验</li>
                <li>擅长使用Blade模板引擎</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("php_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.php}
                text={`${this.state.php}%`}
                styles={{
                  background: { fill: "rgb(228, 228, 7)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.php_board
                })}
              />
            </div>
          </div>
        </div>
        <div className="skill-container container">
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("mongo_board", false)}
          >
            <p>MongoDB</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.mongo_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.mongo_board
              })}
            >
              <ul>
                <li>掌握基础的CRUD指令</li>
                <li>有大量的使用mongoose.js的经验</li>
                <li>有过使用GridFS的经验</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("mongo_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.mongo}
                text={`${this.state.mongo}%`}
                styles={{
                  background: { fill: "rgb(228, 228, 7)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.mongo_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("java_board", false)}
          >
            <p>Java</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.java_board
              })}
            />
            <div
              className={classnames("info-board-left js-board", {
                "info-board-animation": this.state.java_board
              })}
            >
              <ul>
                <li>有过使用Servlet的经验</li>
                <li>有过使用JSP的经验</li>
                <li>有过多线程编程的经验</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("java_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.java}
                text={`${this.state.java}%`}
                styles={{
                  background: { fill: "rgb(204, 36, 72)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.java_board
                })}
              />
            </div>
          </div>
          <div
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("ios_board", false)}
          >
            <p>IOS</p>
            <span
              className={classnames("triangle-down", {
                "triangle-animation": this.state.ios_board
              })}
            />
            <div
              className={classnames("info-board-right js-board", {
                "info-board-animation": this.state.ios_board
              })}
            >
              <ul>
                <li>有过使用Swift的经验</li>
                <li>有过使用React Native的经验</li>
              </ul>
            </div>
            <div
              className="process-container"
              onMouseEnter={() => this.onSetBoard("ios_board", true)}
            >
              <CircularProgressbar
                background={true}
                percentage={this.state.ios}
                text={`${this.state.ios}%`}
                styles={{
                  background: { fill: "rgb(204, 36, 72)" },
                  text: { fill: "whitesmoke" },
                  path: { stroke: "whitesmoke" },
                  trail: { stroke: "transparent" }
                }}
                className={classnames("process-bar", {
                  "process-bar-scale": this.state.ios_board
                })}
              />
            </div>
          </div>
          <div
            id="mysql"
            className="skill text-center"
            onMouseLeave={() => this.onSetBoard("mysql_board", false)}
          >
            <p>MySQL</p>
            <div className="process-container">
              <span
                className={classnames("triangle-down", {
                  "triangle-animation": this.state.mysql_board
                })}
              />
              <div
                className={classnames("info-board-right js-board", {
                  "info-board-animation": this.state.mysql_board
                })}
              >
                <ul>
                  <li>掌握基础的CRUD指令</li>
                </ul>
              </div>
              <div
                className="process-container"
                onMouseEnter={() => this.onSetBoard("mysql_board", true)}
              >
                <CircularProgressbar
                  background={true}
                  percentage={this.state.mysql}
                  text={`${this.state.mysql}%`}
                  styles={{
                    background: { fill: "rgb(204, 36, 72)" },
                    text: { fill: "whitesmoke" },
                    path: { stroke: "whitesmoke" },
                    trail: { stroke: "transparent" }
                  }}
                  className={classnames("process-bar", {
                    "process-bar-scale": this.state.mysql_board
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
