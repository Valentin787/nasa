import PropTypes from "prop-types";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import s from "./UserMenu.module.css";

const UserMenu = ({ name }) => {
  return (
    <div className={s.container}>
      <span
        className={s.itemName}
        //
      >
        Welcome", {"Name"}
        <span className={s.span}>
          <AccountCircleSharpIcon />
        </span>
      </span>
      <button
        className={s.btn}
        type="button"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        <span className={s.btnText}>Out</span>
        <span className={s.spanOut}>
          {" "}
          <LogoutIcon />
        </span>
      </button>
    </div>
  );
};

UserMenu.propTypes = {};

export default UserMenu;
