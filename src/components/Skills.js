import React from "react";
import classnames from "classnames";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Skills extends React.Component {
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
        <h4 className="text-center skill-title">Skills</h4>
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
                <li>Experienced with React(Redux) and Node</li>
                <li>Experienced with jQuery library</li>
                <li>Multiple JS projects with one large project</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("js_board", true)}
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
                <li>C++ functional programming with lambda</li>
                <li>Understand deep concepts like Macros etc.</li>
                <li>Multiple C++ projects with algorithms</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("cpp_board", true)}
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
                <li>Understand HTML5 features like SVG</li>
                <li>Understand template engine like Blade, EJS...</li>
                <li>Practice almost everyday</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("html_board", true)}
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
                <li>Understand CSS3 features like filter</li>
                <li>Understand libraries like Bootstrap</li>
                <li>Practice almost everyday</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("css_board", true)}
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
                <li>Good at writing organized documentation</li>
                <li>Good at writing detailed documentation</li>
                <li>Good at explaining subtle concepts</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("doc_board", true)}
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
                <li>Good at team work</li>
                <li>Experienced leadership in software dev team</li>
                <li>Good at assigning jobs and collecting response</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("team_board", true)}
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
                <li>Capable of using spider to grab info</li>
                <li>Experience with skimage library</li>
                <li>Experience with Computer Vision</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("python_board", true)}
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
                <li>Experience with Laravel</li>
                <li>Experience with Blade Template Engine</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("php_board", true)}
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
                <li>Experience with CURD operations</li>
                <li>Experience with mongoose.js library</li>
                <li>Experience with GridFS</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("mongo_board", true)}
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
                <li>Experience with Servlet</li>
                <li>Experience with JSP</li>
                <li>Experience with multi-threading</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("java_board", true)}
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
                <li>Experience with swift</li>
                <li>Experience with React Native</li>
              </ul>
            </div>
            <div
              className="process-container"
              onClick={() => this.onSetBoard("ios_board", true)}
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
                  <li>Experience with CURD operations</li>
                </ul>
              </div>
              <div
                className="process-container"
                onClick={() => this.onSetBoard("mysql_board", true)}
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
