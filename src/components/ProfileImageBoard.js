import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { setImageBoard } from "../actions/imageBoardAction";

const profileImages = {
  boy1:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-1.jpeg?alt=media&token=5d95a83b-d7b4-4fd5-a4d4-350b90b9c32a",
  boy2:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-2.jpeg?alt=media&token=b97e2b05-7980-44eb-8972-9b9b442068b1",
  boy3:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-3.jpg?alt=media&token=9f0f6f5d-56fd-436d-9a5d-f723c17ca965",
  boy4:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-4.jpeg?alt=media&token=f61b5276-17bd-4de3-b81d-5da51ba499ba",
  boy5:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-5.jpeg?alt=media&token=7d2755c4-5fad-48ab-a874-08c7e7ccee8f",
  girl1:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/girl-1.jpeg?alt=media&token=1eaac60e-4de9-47c8-9f57-3321dddded46",
  girl2:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/girl-2.jpeg?alt=media&token=5ba6c144-8986-4ac5-b040-ec343dc46812",
  girl3:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/girl-3.jpg?alt=media&token=9fddcfba-d656-480d-b06f-d845ed10501b",
  girl4:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/girl-4.jpeg?alt=media&token=a9285d3e-2931-4e36-b58f-84f99888dcdb",
  girl5:
    "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/girl-5.jpg?alt=media&token=46ab8f50-c677-45d3-a699-8d6ea5962448"
};

class ProfileImageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageBoard: false
    };
  }

  onShowImageBoard = () => {
    this.props.dispatch(setImageBoard({ showImageBoard: true }));
  };

  onHideImageBoard = () => {
    this.props.dispatch(setImageBoard({ showImageBoard: false }));
  };

  render() {
    return (
      <div className="profile-image-outercontainer">
        <div
          className={classnames("profile-image-board", {
            "profile-image-board-animation": this.props.image.showImageBoard
          })}
          onMouseEnter={this.onShowImageBoard}
          onMouseLeave={this.onHideImageBoard}
        >
          <span className="triangle-down" />
          <div className="profile-image-board-row">
            <div className="profile-image-div">
              <img
                src={profileImages.boy1}
                alt="profile boy 1"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.boy1)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.boy2}
                alt="profile boy 2"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.boy2)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.boy3}
                alt="profile boy 3"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.boy3)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.boy4}
                alt="profile boy 4"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.boy4)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.boy5}
                alt="profile boy 5"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.boy5)
                }
              />
            </div>
          </div>
          <div className="profile-image-board-row mt-3">
            <div className="profile-image-div">
              <img
                src={profileImages.girl1}
                alt="profile girl 1"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.girl1)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.girl2}
                alt="profile girl 2"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.girl2)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.girl3}
                alt="profile girl 3"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.girl3)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.girl4}
                alt="profile girl 4"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.girl4)
                }
              />
            </div>
            <div className="profile-image-div">
              <img
                src={profileImages.girl5}
                alt="profile girl 5"
                onClick={() =>
                  this.props.onChangeProfileImage(profileImages.girl5)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.imageBoard
  };
};

export default connect(mapStateToProps)(ProfileImageBoard);
