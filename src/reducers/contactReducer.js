const contactReducerDefaultState = [];

const contactReducer = (state = contactReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.content];
    case "SET_COMMENT":
      return action.comments;
    default:
      return state;
  }
};

export default contactReducer;
