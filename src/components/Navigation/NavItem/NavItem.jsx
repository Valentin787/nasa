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
          activeclassname={s.navItemActive}
        >
          {name}
          <span className={s.span}>{icon}</span>
        </NavLink>
      </span>
    </div>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon:PropTypes.node
};

export default NavItem;
