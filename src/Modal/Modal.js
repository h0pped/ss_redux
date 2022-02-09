import { useState } from "react";
import "./Modal.css";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../actions/modalActions.js";
import { addUser, editUser } from "../actions/userActions";

function Modal({ isEdit, editData }) {
  const dispatch = useDispatch();

  const modalState = useSelector((state) => state.modal);
  const data = useSelector((state) => state.users);

  const [record, setRecord] = useState({ ...modalState.editData });

  const addRecord = (record) => {
    const id = data.length > 0 ? data[data.length - 1]._id + 1 : 1;
    record = {
      ...record,
      _id: id,
    };
    dispatch(addUser(record));
    dispatch(closeModal());
  };
  const editRecord = () => {
    dispatch(editUser(record));
    dispatch(closeModal());
  };

  const changeHandler = (e) => {
    console.log();
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <h1>{modalState.isEdit ? "Edit" : "Add"} User</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              {...(modalState.isEdit ? { value: record.name } : "")}
              onChange={changeHandler}
            />
          </div>
          <div className="form-input">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              {...(modalState.isEdit ? { value: record.surname } : "")}
              // {...(isEdit ? { value: record.surname } : "")}
              onChange={changeHandler}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...(modalState.isEdit ? { value: record.email } : "")}
              // {...(isEdit ? { value: record.email } : "")}
              onChange={changeHandler}
            />
          </div>
          {modalState.isEdit ? (
            <button
              className="button"
              type="button"
              onClick={() => editRecord()}
            >
              Edit
            </button>
          ) : (
            <button
              className="button"
              type="button"
              onClick={() => addRecord(record)}
            >
              Add
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Modal;
