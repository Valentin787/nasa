import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AboutOneRocket from "../common/AboutOneRocket";
import Appear from "../common/Appear";
import Loader from "components/common/Loader";

import { baseItemState, loadingState } from "../../redux/spaceX/selectors";
import { getById } from "../../redux/spaceX/operation";


const OneRocket = () => {
  const dispatch = useDispatch();
  const baseItem = useSelector(baseItemState);
  const loading = useSelector(loadingState)

  useEffect(() => {
    dispatch(getById());
  }, [dispatch]);

  return (
    <>
      <Appear time={500}>
        {!loading && baseItem.length !== 0 ?
          <AboutOneRocket renderRocket={baseItem} /> :
          <Loader />}
      </Appear>
    </>
  );
};

export default OneRocket;
