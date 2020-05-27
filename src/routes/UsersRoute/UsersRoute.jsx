import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

import BlackPanther from "../../assets/img/black-panther-profile.jpg";
import Bruce from "../../assets/img/bruce-profile.jpg";

const users = [
  { id: 1, name: "TChalla", username: "blackpanther", avatar: BlackPanther },
  { id: 2, name: "Bruce", username: "bruce", avatar: Bruce },
];

const UsersRoute = () => {
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
