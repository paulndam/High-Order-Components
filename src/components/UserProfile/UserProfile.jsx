import React from "react";
import withData from "../../withData";

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h1>{email}</h1>
      Posts:{" "}
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserProfile);
