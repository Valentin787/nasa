import { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteList from 'components/FavoriteList';
import { favoriteDragonsState } from 'redux/favoriteDragons/selectors';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';



export default function Sidebar({isOpenModal}) {
  const [state, setState] = useState({ right: isOpenModal });
  const favoriteDragons = useSelector(favoriteDragonsState)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FavoriteList/>
    </Box>
  );

  return (
    <>
      <Tooltip title="My Favorite Dragon :)">
        <Badge badgeContent={favoriteDragons.length}
          color="primary">
          <FavoriteRoundedIcon  
            sx={{  
              color: "#ea1f41",
              fontSize: "30px"  
            }}
            onClick={toggleDrawer('right', true)}  
          />
        </Badge>
    </Tooltip>

    <div>
       
      {['right'].map((anchor) => {
          return <Drawer
            key={anchor}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

        })}
      </div>
      </>
  );
}
