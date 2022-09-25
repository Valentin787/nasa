import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./AppearStyle.css";

const Appear = ({ children, time }) => {
  return (
    <CSSTransition in appear timeout={time}>
      <div className="root">{children}</div>
    </CSSTransition>
  );
};

Appear.propTypes = {
  children: PropTypes.node,
  time: PropTypes.number.isRequired,
};

export default Appear;
