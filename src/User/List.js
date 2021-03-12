import React, { useEffect, useState } from "react";

import UserCard from "./Card";
import "../styles.css";

// fake api
import data from "../data.json";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState("");
  const [userToShow, setUserToShow] = useState({});

  function toggleShowMore(email) {
    if (showDetails === email) {
      setShowDetails("");
    } else {
      setShowDetails(email);
    }
  }

  useEffect(() => {
    setUsers(data.results);
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      <ul className="list">
        {users.map((user) => (
          <li className="list-item" key={user.email}>
            <UserCard
              user={user}
              showDetails={showDetails}
              onClickViewMore={() => toggleShowMore(user.email)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
