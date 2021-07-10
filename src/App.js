import React from "react";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import UserList from "./components/UserList/UserList.jsx";

import "./Sass/App.scss";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="rico"
        email="rico@gmail.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
