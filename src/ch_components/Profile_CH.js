import React from "react";
import profile_img from "../images/profile_psed.jpg";

export default class Profile_CH extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-content">
          <div className="profile-text">
            <h4 className="mb-4">关于我</h4>
            <p>
              我叫邹旭洋，来自苏州，目前在南加州大学读大三，专业是计算机科学
              <span className="line-through">（码农）</span>。
            </p>
            <p>
              在中文页面我突然就不是很想讨论一些学习方面的东西了，如果各位有兴趣的话可以去英文界面查看。
              中文界面就说说我的兴趣爱好吧 ——
              如果打游戏这种谁都有的爱好不算，我唯一的爱好就是写小说。
              对，就是那种写着写着就坚持不下来退坑的十八流网络小说作者。
            </p>
            <p>
              坚持不下来的原因有很多。首先我个人就是一个坚持不了太长的，没有毅力的人。不过在进入大学后，
              我的这种性格变了很多。现在的我如果坚持要做一件事，那么就一定会把这件事做好。但我现在依旧
              还是已经停更了半年多。其理由并不是因为我坚持不下去，而是我实在是
              <span className="line-through">他娘的</span>
              太忙了。我现在大多时间都要在图书馆待到十一二点，回去洗个澡，刷掉b站的动态，就直接去睡觉了。
              白天在学校里的闲散时间我也只是用来写自己的项目（比如说这个网站）。写小说是我的梦想，无论如何
              我都想实现它，但我自始至终都认为我将来的事业更重要。兴趣爱好什么的对我来说是随时随地可以抛弃的。
            </p>
            <p>我现在只希望付出的一切能够有回报吧。</p>
            <p
              className="mt-5"
              style={{ color: "palevioletred", fontSize: "2rem" }}
            >
              Fight On！Lynch！
            </p>
          </div>
        </div>
      </div>
    );
  }
}
