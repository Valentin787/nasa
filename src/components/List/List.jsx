import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import AboutOneRocket from "../common/AboutOneRocket";

import { allDragonsState } from "../../redux/spaceX/selectors";
import { getAllDragons } from "../../redux/spaceX/operation";

// import s from "./List.module.css";
import "../common/Appear/AppearStyle.css";
import Appear from "../common/Appear";
import Banner from "./Banner";
import ItemList from "./ItemList/ItemList";
import ButtonClose from "./ButtonClose/ButtonClose";

const List = (props) => {
  const allDragons = useSelector(allDragonsState);
  const dispatch = useDispatch();

  const [oneDragon, setOneDragon] = useState(null);
  const [openList, setOpenList] = useState(false);

  //GET_ALL_DRAGONS(FIRST_FETCH)

  useEffect(() => {
    dispatch(getAllDragons());
  }, [dispatch]);

  const closeReview = () => {
    if (oneDragon) setOneDragon(null);
  };

  return (
    <>
      <Appear time={500}>
        <section>
          <Banner openList={openList} onOpenList={setOpenList} />

          {allDragons.length !== 0 && (
            <ItemList
              openList={openList}
              allDragons={allDragons}
              setOneDragon={setOneDragon}
            />
          )}
        </section>
      </Appear>

      {oneDragon && (
        <>
          <ButtonClose closeReview={closeReview} />
          <AboutOneRocket renderRocket={oneDragon} />
        </>
      )}
    </>
  );
};

List.propTypes = {};

export default List;
