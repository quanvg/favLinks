import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const Table = props => {
  const { linkData, removeLink } = props;

  return (
    <table>
      <TableHeader />
    </table>
  );
};

export default Table;
