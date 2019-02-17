const imageBoardReducerDefaultState = { showImageBoard: false };

const imageBoardReducer = (state = imageBoardReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_IMAGE_BOARD":
      return action.showImageBoard;
    default:
      return state;
  }
};

export default imageBoardReducer;
