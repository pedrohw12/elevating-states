import React, { useState } from "react";

const UserCard = ({ user, showDetails, onClickViewMore }) => {
  return (
    <div>
      <div>
        <img src={user.picture.thumbnail} alt={user.name.first} />
        <span>
          {user.name.title} {user.name.first} {user.name.last}{" "}
        </span>

        <button onClick={onClickViewMore}>
          {showDetails ? "Ver menos" : "Ver mais"}
        </button>
      </div>
      {showDetails && (
        <div>
          <span>{user.phone}</span>
          <br />
          {user.dob.age} anos <br />
          {user.email}
        </div>
      )}
    </div>
  );
};

export default UserCard;
