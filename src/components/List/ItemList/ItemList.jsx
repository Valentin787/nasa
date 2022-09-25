import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import s from "../List.module.css";
import "../../common/Appear/AppearStyle.css";

const ItemList = ({ openList, allDragons, setOneDragon }) => {
  return (
    <div className="listWrap">
      <CSSTransition timeout={700} in={openList} unmountOnExit>
        <ul className={s.list}>
          {allDragons.length !== 0 &&
            allDragons.map((item, index) => (
              <li
                className={s.listItem}
                key={item.id}
                onClick={() => setOneDragon(item)}
              >
                <p className={s.itemText}>
                  {`${index + 1}.`}
                  <span>
                    <img
                      className={s.img}
                      src={item.flickr_images[0]}
                      alt={item.name}
                      width="100px"
                      height="80px"
                    />
                  </span>
                  {`${item.name}`}
                </p>

                <hr />
              </li>
            ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

ItemList.propTypes = {
  openList: PropTypes.bool.isRequired,
  allDragons: PropTypes.array.isRequired,
  setOneDragon: PropTypes.func.isRequired,
};

export default ItemList;
