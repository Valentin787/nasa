import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./NavItem.module.css";

const NavItem = ({ link, name, icon }) => {
  return (
    <div className={s.NavItem}>
      <span className={s.iconWrapper}>
        <NavLink
          to={link}
          className={s.itemName}
          activeclassname={s.NavItemActive}
        >
          {name}
          <span className={s.span}>{icon}</span>
        </NavLink>
      </span>
    </div>
  );
};

NavItem.propTypes = {};

export default NavItem;
