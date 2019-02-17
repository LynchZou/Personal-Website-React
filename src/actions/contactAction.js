import database from "../firebase/firebase";

// add comment to store
const addComment = ({ username, dateTime, text, image, isLynch } = {}) => ({
  type: "ADD_COMMENT",
  content: {
    username,
    dateTime,
    text,
    image,
    isLynch
  }
});

// add comment to firebase and get value back
export const makeComment = (comment = {}) => {
  return dispatch => {
    const { username, dateTime, text, image, isLynch } = comment;
    const newComment = { username, dateTime, text, image, isLynch };
    database
      .collection("comments")
      .add(newComment)
      .then(ref => {
        dispatch(addComment({ id: ref.key, ...newComment }));
      })
      .catch(err => console.error("Error adding document: " + err));
  };
};

// set expenses
const setComments = comments => ({
  type: "SET_COMMENT",
  comments
});

// grab comments from firebase
export const grabComments = () => {
  return dispatch => {
    database
      .collection("comments")
      .orderBy("dateTime", "asc")
      .get()
      .then(snapshots => {
        var comments = [];
        snapshots.forEach(doc => {
          comments.push({
            id: doc.id,
            ...doc.data()
          });
        });
        dispatch(setComments(comments));
      })
      .catch(err => console.error("Error reading document: " + err));
  };
};
