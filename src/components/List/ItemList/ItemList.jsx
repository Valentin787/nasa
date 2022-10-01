import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDragon, getDragons } from "redux/favoriteDragons/operation";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "../List.module.css";
import "../../common/Appear/AppearStyle.css";
import { favoriteDragonsState } from "redux/favoriteDragons/selectors";



const ItemList = ({ openList, allDragons, setOneDragon }) => {

  const dispatch = useDispatch();
  const dragons = useSelector(favoriteDragonsState);
  const [activeDragon, setActiveDragon] = useState(null);




  //ADD_DRAGON
  
  const onAddDragon = (newDragon) => {
    const sameDragon = dragons.some(item => item.name === newDragon.name);
    if (sameDragon) {
      toast.error(`${newDragon.name} вже добавлений в список`)
      return
    }
    return setActiveDragon(newDragon);
  }
  
  useEffect(() => {
    if (!activeDragon) return;
  
    dispatch(addDragon(activeDragon));
    toast.success(`${activeDragon.name} успішно доданий в список улюблених !!`);
    setActiveDragon(null);
    

  }, [activeDragon, dispatch])
  
  

  return (
    <div className="listWrap">
      <CSSTransition timeout={700} in={openList} unmountOnExit>
        <ul className={s.list}>
          {allDragons.length !== 0 &&
            allDragons.map((item, index) => (
              <li className={s.listItem}key={item.id}>
                <div className={s.activeDragon}>
                  <p
                    onClick={() => setOneDragon(item)}
                    className={s.itemText}>
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
                <button
                  onClick={() => onAddDragon(item)}                
                    className={s.addBtn}>
                    <Tooltip title="Add">
                      <LocalHospitalRoundedIcon 
                        sx={{ 
                          color: "#4CAF50",    
                          fontSize: "40px"                    
                        }}                    
                      />    
                    </Tooltip>
             
                  </button>
                  </div>
               <hr />
              </li>
            ))}
        </ul>
      </CSSTransition>
      <ToastContainer theme="colored"/>
    </div>
  );
};

ItemList.propTypes = {
  openList: PropTypes.bool.isRequired,
  allDragons: PropTypes.array.isRequired,
  setOneDragon: PropTypes.func.isRequired,
};

export default ItemList;
