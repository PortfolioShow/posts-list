import React from "react";
import style from "./user.module.scss";
import { NavLink } from "react-router-dom";

const User = ({ usersList }) => {
  return (
    <div className={style.userList}>
      {usersList.map((user) => (
        <div className={style.user} key={user.id}>
          <div className={style.user__block}>
            <NavLink to={"/posts-list/profile/" + user.id} className={style.user__link}>
              <span className={style.user__name}>{user.name}</span>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
