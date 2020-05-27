import React from "react";

import BlackPanther from "../../assets/img/black-panther-profile.jpg";

import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src={BlackPanther} alt="Avatar:T'Challa" />
              </div>
            </div>

            <p className="user__name">
              T'Challa
              <span>@blackpanther</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
