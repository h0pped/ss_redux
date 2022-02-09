// import { useState } from "react";
import "./App.css";
import Table from "./Table/Table.js";
import Modal from "./Modal/Modal.js";

import { useSelector, useDispatch } from "react-redux";
import { openModal, setAdd } from "./actions/modalActions.js";

function App() {
  const dispatch = useDispatch();

  const newRecordButtonHandler = () => {
    dispatch(setAdd());
    dispatch(openModal());
  };

  const modalState = useSelector((state) => state.modal);
  return (
    <div className="App">
      {modalState.isOpen ? <Modal /> : ""}
      <h1>Users</h1>
      <Table />
      <button className="button" onClick={newRecordButtonHandler}>
        Add new user
      </button>
    </div>
  );
}

export default App;
