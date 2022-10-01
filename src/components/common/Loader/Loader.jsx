import { createPortal } from "react-dom";
import { SpinnerDotted } from 'spinners-react';
import s from "./Loader.module.css";


const loader = document.querySelector("#loader");

function Loader() {

  return createPortal(
    <div className={s.wrapLoader}>
      <div className={s.modal}>
        <SpinnerDotted
          size={80}
          thickness={180}
          speed={77}
          color="#0d5ee0"
        />
      </div>
    </div>,
    loader
  );

}

export default Loader