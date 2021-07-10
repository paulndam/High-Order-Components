import React, { Component } from "react";
import withData from "../../withData";

const UserList = ({ data }) => {
  return (
    <div className="container user-list">
      <h1 className="t">User List</h1>
      {data.map((u) => (
        <div className="post" key={u.id}>
          <h1>{u.name}</h1>
          <h1>{u.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default withData(UserList);
