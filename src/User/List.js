import React, { useEffect, useState } from "react";
import UserCard from "./Card";

// fake api
import data from "../data.json";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [userToShow, setUserToShow] = useState("");

  function toggleShowMore() {}

  useEffect(() => {
    setUsers(data.results);
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      <ul
        style={{
          listStyle: "none",
          backgroundColor: "#ddd",
          borderRadius: 10,
          padding: 20
        }}
      >
        {users.map((user) => (
          <li
            style={{
              backgroundColor: "#666",
              margin: 5,
              borderRadius: 10,
              padding: 5
            }}
            key={user.email}
          >
            <UserCard
              user={user}
              showDetails={showDetails}
              onClickViewMore={() => setShowDetails(!showDetails)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
