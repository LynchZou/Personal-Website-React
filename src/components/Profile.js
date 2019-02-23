import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-content">
          <div className="profile-text">
            <h4 className="mb-4">ABOUT ME</h4>
            <p>
              My name is Xuyang Zou and my English name is Lynch. Please do not
              ask why I took this name as my English name and pretend that you
              do not know the actual meaning of this word. Just like you will
              not laugh at others named Dick.{" "}
              <span className="line-through">You will not, right?</span>
            </p>
            <p>
              I am a junior currently studying{" "}
              <span className="line-through">Counter-Strike</span> Computer
              Science at USC. I used to be Electrical Engineering major for one
              and a half years and eventually switched to CS during my second
              semester of sophomore year. Then I fell in love with web
              technologies and learned a lot of them including MERN stack. I
              also have experience with a little Computer Vision. But the
              problem is I started too late{" "}
              <span className="line-through">
                but not as late as people who gave up EE during theire PhD year
              </span>{" "}
              and it's really difficult to catch up with others especially when
              I am actually not gifted in programming.
            </p>
            <p>
              Ahhh, enough complaints. Let's talke about future instead. I would
              like to become a Fullstack Engineer which is my ultimate goal
              before my 30 years old. Fullstack Enginner has to be capable of
              almost EVERYTHING. My strongest ability, however, is self-learning
              skill. Right now I am far away from a Fullstack Engineer, but that
              does not mean I will never achieve my goal. I believe in myself.
            </p>
            <p
              className="mt-5"
              style={{ color: "palevioletred", fontSize: "2rem" }}
            >
              GO FOR YOU FUTURE, LYNCH!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
