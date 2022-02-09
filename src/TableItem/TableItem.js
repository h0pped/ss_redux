import "./TableItem.css";

import { useDispatch, useSelector } from "react-redux";
import { openModal, setEdit } from "../actions/modalActions.js";
import { deleteUser } from "../actions/userActions.js";
function TableItem({ data }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const editRecordButtonHandler = (id) => {
    dispatch(setEdit(users.find((user) => user._id === id)));
    dispatch(openModal());
  };
  const deleteRecord = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <tr className="table-item">
      <td>{data.name}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>
        <button
          className="button button-edit"
          onClick={() => {
            editRecordButtonHandler(data._id);
          }}
        >
          Edit
        </button>
        <button
          className="button button-delete"
          onClick={() => {
            deleteRecord(data._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default TableItem;
