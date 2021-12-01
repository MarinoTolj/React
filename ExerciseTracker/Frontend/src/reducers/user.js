const userReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};

export default userReducer;
