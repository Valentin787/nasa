import PropTypes from "prop-types";
import CancelIcon from "@mui/icons-material/Cancel";
import s from "../List.module.css";

const ButtonClose = ({ closeReview }) => {
  return (
    <div className={s.btnCloseWrap}>
      <button className={s.btnClose} onClick={closeReview}>
        <CancelIcon
          sx={{
            color: "#f44336",
            fontSize: "40px",
          }}
        />
      </button>
    </div>
  );
};

ButtonClose.propTypes = {
  closeReview: PropTypes.func,
};

export default ButtonClose;
