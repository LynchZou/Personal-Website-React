import React from "react";
import Typing from "react-typing-animation";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: [
        "Lynch",
        "I'm a USC student",
        "I'm a Web Developer",
        "I come from China",
        "I live in LA now"
      ],
      currentText: "Lynch"
    };
  }

  render() {
    return (
      <div className="index">
        <div className="text-center intro">
          <div className="change-intro col-8 mx-auto">
            <Typing loop={true}>
              <span>Lynch</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={20} />
              <Typing.Delay delay={500} />
              <span>I'm a USC student</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span>I'm a Web Developer</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span>I come from China</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span style={{ color: "palevioletred" }}>
                I AM SINGLE RIGHT NOW
              </span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
            </Typing>
          </div>
          <div className="sub-intro mt-2">
            Junior Computer Science Student / Web Developer
          </div>
        </div>
      </div>
    );
  }
}
