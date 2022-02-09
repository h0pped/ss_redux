export const addUser = (data) => {
  return {
    type: "ADD_USER",
    data,
  };
};
export const editUser = (data) => {
  return {
    type: "EDIT_USER",
    data,
  };
};
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};
