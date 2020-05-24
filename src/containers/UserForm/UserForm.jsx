import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import PlaceHolder from "../../assets/img/profile-placeholder.png";

import "./UserForm.scss";

const UserForm = () => {
  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                <div className="user__thumb__wrapper">
                  <img src={PlaceHolder} alt="Avatar: John Doe" />
                </div>
              </div>

              <p className="user__name">
                John Doe
                <span>@johndoe</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input type="text" placeholder="Ex: John Doe" />

            <label>Usuário</label>
            <input type="text" placeholder="Ex: johndoe" />

            <label>Email</label>
            <input type="email" placeholder="Ex: johndoe@gmail.com" />

            <label>Url da Imagem de Perfil</label>
            <input type="text" placeholder="http://..." />

            <button type="button">Cadastrar</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
