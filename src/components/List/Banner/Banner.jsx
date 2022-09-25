import { useState } from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PropTypes from "prop-types";
import s from "../List.module.css";
import "../../common/Appear/AppearStyle.css";
import Appear from "../../common/Appear";

const Banner = ({ openList, onOpenList }) => {
  const [showTitle, setShowTitle] = useState(!openList);

  return (
    <>
      <div className="bannerWrap">
        <Appear time={500}>
          <div
            onClick={() => onOpenList((prevState) => !prevState)}
            className={s.titleListWrapOpen}
          >
            <MenuOpenIcon sx={{ fontSize: "30px" }} />
            <h2 className={s.titleList}> Глянемо усі "Dragons" ?</h2>
          </div>
        </Appear>

        {/* <CSSTransition
        timeout={1000}
        in={!showTitle}
        unmountOnExit
        > 
        <div
            onClick={() => onOpenList(prevState => {
              setShowTitle(prevState)
              return !prevState
            })}
          className={s.titleListWrapClose}>
          <CancelIcon sx={{fontSize: "30px"}}/>
          <h2 className={s.titleList}> Закриємо список ?</h2>
        </div>
        </CSSTransition>  */}
      </div>
    </>
  );
};

Banner.propTypes = {
  openList: PropTypes.bool.isRequired,
  onOpenList: PropTypes.func.isRequired,
};

export default Banner;
