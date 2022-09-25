import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AboutOneRocket from "../common/AboutOneRocket";
import Appear from "../common/Appear";
import { baseItemState } from "../../redux/spaceX/selectors";
import { getById } from "../../redux/spaceX/operation";

// import s from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch();
  const baseItem = useSelector(baseItemState);

  useEffect(() => {
    dispatch(getById());
  }, [dispatch]);

  return (
    <>
      <Appear time={500}>
        {baseItem.length !== 0 && <AboutOneRocket renderRocket={baseItem} />}
      </Appear>
    </>
  );
};

export default Home;
