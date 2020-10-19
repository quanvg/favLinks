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

const TableBody = props => {
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL} target="_blank" rel="noopener noreferrer">
            {row.URL}
          </a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { linkData, removeLink } = props;

  return (
    <table>
      <TableHeader />
      <TableBody linkData={linkData} removeLink={removeLink} />
    </table>
  );
};

export default Table;
