import "./Table.css";
import TableItem from "../TableItem/TableItem.js";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function Table() {
  // const dispatch = useDispatch();

  const records = useSelector((state) => state.users);
  return (
    <table className="table">
      <thead>
        <tr className="table-header-row">
          <th className="table-header">Name</th>
          <th className="table-header">Surname</th>
          <th className="table-header">Email</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <TableItem key={record._id} data={record} />
        ))}
      </tbody>
    </table>
  );
}
export default Table;
