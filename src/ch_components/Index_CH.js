import React from "react";
import Typing from "react-typing-animation";

export default class Index_CH extends React.Component {
  constructor(props) {
    super(props);
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
              <span>我是来自USC的留学生</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span>我是一个网页开发者</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span>我比品如的衣服还要骚</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
              <span style={{ color: "palevioletred" }}>
                我现在依然还是单身！
              </span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={30} />
              <Typing.Delay delay={500} />
            </Typing>
          </div>
          <div className="sub-intro mt-2">计算机科学大三学生 / 网页开发者</div>
        </div>
      </div>
    );
  }
}
