import React from "react";
import { connect } from "react-redux";
import { makeComment } from "../actions/contactAction";
import { setImageBoard } from "../actions/imageBoardAction";
import moment from "moment";
import Moment from "react-moment";
import validator from "validator";
import lynch from "../images/profile_psed.jpg";
import ProfileImageBoard from "./ProfileImageBoard";

class Contact extends React.Component {
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
        prevState.errors.username =
          "Username must be between 3 and 10 characters";
        return prevState;
      });
    } else if (validator.contains(e.target.value.toUpperCase(), "LYNCH")) {
      this.setState(prevState => {
        prevState.errors.username = "Username cannot contain 'LYNCH' !";
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
        prevState.errors.text = "Comment must be between 10 and 500 characters";
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

  onShowImageBoard = () => {
    this.props.dispatch(setImageBoard({ showImageBoard: true }));
  };

  onHideImageBoard = () => {
    this.props.dispatch(setImageBoard({ showImageBoard: false }));
  };

  render() {
    return (
      <div className="contact">
        <h4 className="text-center contact-title mb-4">Contact</h4>
        <div className="contact-container container">
          <div className="col-10 contact-display mx-auto">
            {this.props.comments.map(comment => {
              return (
                <div className="comment" key={comment.id}>
                  <div className="comment-info text-center">
                    <img
                      className="comment-img"
                      src={comment.isLynch ? lynch : comment.image}
                      alt="user image"
                    />
                    <p className="comment-username">{comment.username}</p>
                  </div>
                  <div className="comment-content">
                    <Moment
                      className="comment-dateTime"
                      format="MMMM Do YYYY, hh:mm a"
                    >
                      {comment.dateTime}
                    </Moment>
                    <span
                      className={
                        comment.isLynch ? "triangle-left-blue" : "triangle-left"
                      }
                    />
                    <p
                      className={
                        comment.isLynch ? "comment-text-blue" : "comment-text"
                      }
                    >
                      {comment.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="contact-form col-10 mx-auto mt-5"
            onSubmit={this.onSubmit}
          >
            <ProfileImageBoard
              showImageBoard={this.state.showImageBoard}
              onChangeProfileImage={this.onChangeProfileImage}
            />
            <img
              src={this.state.profileImage}
              className="user-profile-img"
              alt="user profile"
              onMouseEnter={this.onShowImageBoard}
            />
            <input
              type="text"
              name="username"
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
              placeholder="Leave any comment here!"
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
              value="SUBMIT"
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

export default connect(mapStateToProps)(Contact);
