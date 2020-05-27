import React, { useState } from "react";

import Story from "../../components/Story";
import BlackPanther from "../../assets/img/black-panther-profile.jpg";
import Bruce from "../../assets/img/bruce-profile.jpg";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          <button
            onClick={() => toggleShowStory(!showStory)}
            key="1"
            className="user__thumb user__thumb--hasNew"
          >
            <div className="user__thumb__wrapper">
              <img src={BlackPanther} alt="Avatar: T'Chala" />
            </div>
          </button>
          <button key="2" className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src={Bruce} alt="Avatar: Bruce Wayne" />
            </div>
          </button>
        </div>
      </section>

      {showStory && <Story handleClose={() => toggleShowStory(!showStory)} />}
    </React.Fragment>
  );
};

export default Stories;
