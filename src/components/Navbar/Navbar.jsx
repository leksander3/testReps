import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ isActive }) => (isActive ? s.active : s.item);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={ActiveLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="dialogs" className={ActiveLink}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="news" className={ActiveLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music" className={ActiveLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings" className={ActiveLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
