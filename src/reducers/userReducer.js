import users from "../data/data.js";

const userReducer = (state = users, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.data];
    case "EDIT_USER":
      return [
        ...state.map((user) =>
          user._id === action.data._id ? action.data : user
        ),
      ];
    case "DELETE_USER":
      return [...state.filter((user) => user._id !== action.id)];
    default:
      return state;
  }
};

export default userReducer;
