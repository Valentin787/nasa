import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from '../Sidebar';
import FavoriteList from "components/FavoriteList";
import Modal from "components/common/Modal";

import { signOut } from "redux/auth/authSlice";
import { getLocalId, getUserName } from "redux/auth/authSelector";
import { getDragons } from "redux/favoriteDragons/operation";

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutIcon from "@mui/icons-material/Logout";

import s from "./UserMenu.module.css";


const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const localId = useSelector(getLocalId);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(prevState => !prevState);
  
  ///GET_DRAGONS
  
  useEffect(() => {
    if (!localId) return;
      
    dispatch(getDragons(localId))

  }, [dispatch, localId])


  return (
    <div className={s.container}>
      <button className={s.favoriteBtn}>
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
