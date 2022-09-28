import { useDispatch, useSelector } from "react-redux";
import { signOut } from "redux/auth/authSlice";
import { getUserName } from "redux/auth/authSelector";

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import s from "./UserMenu.module.css";
import { useState } from "react";
import Modal from "components/common/Modal";
import FavoriteList from "components/FavoriteList";
import Sidebar from '../Sidebar'



const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(prevState => !prevState);

  console.log(isOpenModal)

  return (
    <div className={s.container}>
      <button className={s.favoriteBtn}>
      {/* <FavoriteRoundedIcon
        sx={{
          color: "#ea1f41",
          fontSize: "30px"
        }}
        onClick={closeModal}
        /> */}
        <Sidebar isOpenModal={isOpenModal}/>

      </button>

      {isOpenModal &&
        <Modal closeModal={closeModal}>
          <FavoriteList/>
        </Modal>
      }
      <span className={s.itemName}>
        Welcome", {name && name}
        <span className={s.span}>
          <AccountCircleSharpIcon />
        </span>
      </span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(signOut())}
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

export default UserMenu;
