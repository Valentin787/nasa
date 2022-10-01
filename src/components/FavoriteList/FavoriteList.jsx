import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Appear from 'components/common/Appear';
import Loader from 'components/common/Loader';

import { deleteDragon } from 'redux/favoriteDragons/operation';
import { favoriteDragonsState, getLoading } from 'redux/favoriteDragons/selectors';

import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import Tooltip from '@mui/material/Tooltip';
import s from './FavoriteList.module.css';


const FavoriteList = () => {

  const favoriteDragon = useSelector(favoriteDragonsState);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();
  const [removeDragon, setRemoveDragon] = useState(null);


  ///REMOVE_DRAGON
  
  useEffect(() => {
    if (!removeDragon) return;
    dispatch(deleteDragon(removeDragon));
    setRemoveDragon(null);

  }, [dispatch, removeDragon])
  
  return (
    <Appear time={350}>
      {loading ? <Loader/> :
        <div className={s.container}>
          <h3 className={s.text}> MY FAVORITE</h3>
          <ul className={s.favoriteItemList}>
            {favoriteDragon && favoriteDragon.map((item, index) => {
              return <li className={s.favoriteItem} key={item.id}>
                <div className={s.favoriteItemWrap}>
                  <div className={s.textWrap}>
                    <p className={s.text}>{`${index + 1}.`}</p>
                    <img className={s.img} src={item.flickr_images[0]} alt={item.name} />
                    <p className={s.text}>{item.name}</p>
                  </div>
                  <button
                    onClick={() => setRemoveDragon(item)}
                    className={s.btnDelete}>
                    <Tooltip title=" Do You Want Delete ?">
                      <DisabledByDefaultRoundedIcon
                        sx={{
                          color: "red",
                          fontSize: "30px"
                        }} />
                    </Tooltip>


                  </button>
                  {/* <TemporaryDrawer/> */}

                </div>

              </li>
 
    
            })}
          </ul>
        </div>
      }
      </Appear>
  )
}

export default FavoriteList