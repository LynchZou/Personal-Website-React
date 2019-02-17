const sidebarReducerDefaultState = { showSidebar: false };

const sidebarReducer = (state = sidebarReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return action.showSidebar;
    default:
      return state;
  }
};

export default sidebarReducer;
