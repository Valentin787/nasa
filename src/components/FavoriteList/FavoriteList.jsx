import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import TemporaryDrawer from '../Sidebar/TemporaryDrawer';
import { deleteDragon, getDragons } from 'redux/favoriteDragons/operation';
import { favoriteDragonsState } from 'redux/favoriteDragons/selectors';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import s from './FavoriteList.module.css';
import Appear from 'components/common/Appear';

const FavoriteList = () => {

  const favoriteDragon = useSelector(favoriteDragonsState);
  const dispatch = useDispatch();
  const [removeDragon, setRemoveDragon] = useState(null);



  ///GET_DRAGONS
  

  useEffect(() => {

    dispatch(getDragons())

  }, [dispatch])


  ///REMOVE_DRAGON
  
  useEffect(() => {
    if (!removeDragon) return;
    dispatch(deleteDragon(removeDragon));
    setRemoveDragon(null);

  }, [dispatch, removeDragon])
  



  return (
    <Appear time={350}>
      <div className={s.container}>
        <h3 className={s.text}> МОЇ ЛЮБІМКИ</h3>
      <ul className={s.favoriteItemList}>
        {favoriteDragon && favoriteDragon.map((item,index) => {
          return <li className={s.favoriteItem} key={item.id}>
            <div className={s.favoriteItemWrap}>
              <div className={s.textWrap}>
                <p className={s.text}>{`${index + 1}.`}</p>
                <img  className={s.img} src={item.flickr_images[0]} alt={item.name}  />
                <p className={s.text}>{item.name}</p>
              </div>
              <button
                onClick={() => setRemoveDragon(item)}
                className={s.btnDelete}>
              <DisabledByDefaultRoundedIcon            
                sx={{                               
                  color: "red",                   
                  fontSize: "30px"                
                }} />
              </button>
              {/* <TemporaryDrawer/> */}

            </div>

          </li>
 
    
        })}
      </ul>
      </div>
      </Appear>
  )
}

export default FavoriteList