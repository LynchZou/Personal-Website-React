let lan = localStorage.getItem("lynch_website_language");
lan = lan ? lan : "en";

const languageReducerDefaultState = { language: lan };

const languageReducer = (state = languageReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { language: action.language };
    default:
      return state;
  }
};

export default languageReducer;
