export const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};
export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
export const setAdd = () => {
  return {
    type: "SET_ADD",
  };
};
export const setEdit = (data) => {
  return {
    type: "SET_EDIT",
    editData: data,
  };
};
