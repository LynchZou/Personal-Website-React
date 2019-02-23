import React from "react";
import { connect } from "react-redux";
import { makeComment } from "../actions/contactAction";
import moment from "moment";
import Moment from "react-moment";
import validator from "validator";
import lynch from "../images/profile_psed.jpg";

class Contact_CH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage:
        "https://firebasestorage.googleapis.com/v0/b/website-react-69b18.appspot.com/o/boy-1.jpeg?alt=media&token=5d95a83b-d7b4-4fd5-a4d4-350b90b9c32a",
      errors: {}
    };
  }

  onChangeUsername = e => {
    if (!validator.isLength(e.target.value, 3, [10])) {
      this.setState(prevState => {
        prevState.errors.username = "用户名必须在3-10个字符";
        return prevState;
      });
    } else if (validator.contains(e.target.value.toUpperCase(), "LYNCH")) {
      this.setState(prevState => {
        prevState.errors.username = "用户名不能包含 'LYNCH' !";
        return prevState;
      });
    } else {
      this.setState(prevState => {
        prevState.errors.username = "";
        return prevState;
      });
    }
  };

  onChangeProfileImage = image => {
    this.setState({ profileImage: image });
  };

  onChangeText = e => {
    if (!validator.isLength(e.target.value, 10, [500])) {
      this.setState(prevState => {
        prevState.errors.text = "评论必须在10到500个字之间！";
        return prevState;
      });
    } else {
      this.setState(prevState => {
        prevState.errors.text = "";
        return prevState;
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.errors.username || this.state.errors.text) {
      alert("Please solve error first!");
      return;
    }

    this.props.dispatch(
      makeComment({
        username: e.target.username.value,
        text: e.target.content.value,
        dateTime: moment().format(),
        image: this.state.profileImage,
        isLynch: e.target.username.value.toUpperCase() == "LYNCH"
      })
    );
    e.target.content.value = "";
  };

  //   onShowImageBoard = () => {
  //     this.props.dispatch(setImageBoard({ showImageBoard: true }));
  //   };

  //   onHideImageBoard = () => {
  //     this.props.dispatch(setImageBoard({ showImageBoard: false }));
  //   };

  render() {
    return (
      <div className="contact">
        <h4 className="text-center contact-title mb-4">联系</h4>
        <div className="contact-container container">
          <div className="col-10 contact-display mx-auto">
            <div className="comment">
              <div className="comment-info text-center">
                <img className="comment-img" src={lynch} alt="user image" />
                <p className="comment-username">Lynch</p>
              </div>
              <div className="comment-content">
                <Moment
                  className="comment-dateTime"
                  format="MMMM Do YYYY, hh:mm a"
                >
                  {moment().format()}
                </Moment>
                <span className="triangle-left-blue" />
                <p className="comment-text-blue">
                  该网站使用Firebase作为数据库，但Google在国内被屏蔽了，所以无法连接到数据库。
                  如果想浏览该内容，请选择科学上网或者转世投胎。谢谢。（真的想联系我就加微信）
                </p>
              </div>
            </div>
          </div>
          <form
            className="contact-form col-10 mx-auto mt-5"
            onSubmit={this.onSubmit}
          >
            <img
              src={this.state.profileImage}
              className="user-profile-img"
              alt="user profile"
              onMouseEnter={this.onShowImageBoard}
            />
            <input
              type="text"
              name="用户名"
              className="form-username ml-3"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <br />
            {this.state.errors.username && (
              <small
                style={{
                  color: "red",
                  position: "absolute",
                  left: "14%",
                  top: "55px"
                }}
              >
                {this.state.errors.username}
              </small>
            )}
            <hr style={{ marginLeft: "0", width: "40%", marginTop: "30px" }} />
            <textarea
              className="form-control form-text mt-2"
              placeholder="发表你的评论!"
              name="content"
              rows="10"
              onChange={this.onChangeText}
              id="text-field"
            />
            {this.state.errors.text ? (
              <small style={{ color: "red" }}>{this.state.errors.text}</small>
            ) : (
              <br />
            )}
            <input
              type="submit"
              value="提交"
              className="form-control btn btn-danger form-button mt-4"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.contact
  };
};

export default connect(mapStateToProps)(Contact_CH);
