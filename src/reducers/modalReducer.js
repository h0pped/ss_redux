// import users from "../data/data.js";

const modalReducer = (
  state = { isEdit: false, isOpen: false, editData: null },
  action
) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
        editData: null,
      };
    case "SET_EDIT":
      return {
        ...state,
        isEdit: true,
        editData: action.editData,
      };
    case "SET_ADD":
      return {
        ...state,
        isEdit: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
