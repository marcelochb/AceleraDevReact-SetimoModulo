import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlackPanther from "../../assets/img/black-panther-profile.jpg";
import BlackPantherFirure from "../../assets/img/black-panther-1.jpg";
import "./Post.scss";

const Post = ({ onlyPost }) => {
  return (
    <article className="post" data-testid="post">
      {onlyPost && (
        <header className="post__header">
          <div className="user">
            <Link to="/users/blackpanther" className="user__thumb">
              <div className="user__thumb__wrapper">
                <img src={BlackPanther} alt="Avatar: Black Panther" />
              </div>
            </Link>

            <Link to="/users/blackpanther" className="user__name">
              T'Challa
            </Link>
          </div>

          <button className="post__context">
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={BlackPantherFirure} alt="Poster: Pizza Time" />
      </figure>

      {onlyPost === true && (
        <nav className="post__controls">
          <button className="post__control">
            <i className="fas fa-heart" />
          </button>

          <div className="post__status">
            <div className="user">
              <span>
                Curtido por<Link to="/">{` Carlito `}</Link> e outras{" "}
                <Link to="/">2 pessoas</Link>.
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
