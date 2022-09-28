import { useState } from 'react';
import { favoriteDragonsState } from 'redux/favoriteDragons/selectors';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useSelector } from 'react-redux';
import FavoriteList from 'components/FavoriteList';


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
      {/* <List>
        {favoriteDragons && favoriteDragons.map(({name}, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
<>
     <FavoriteRoundedIcon   
            sx={{
              color: "#ea1f41",
              fontSize: "30px"
            }}
            onClick={toggleDrawer('right', true)}
          />
    <div>
       
      {['right'].map((anchor) => {

           {/* <Button onClick={toggleDrawer(anchor, true)}> */}
          {/* <FavoriteRoundedIcon   
            sx={{
              color: "#ea1f41",
              fontSize: "30px"
            }}
            onClick={toggleDrawer(anchor, true)}
          /> */}
           {/* </Button> */}
          {/* <Button onClick={toggleDrawer(anchor, true)}> */}
            {/* {anchor} */}
          {/* </Button> */}
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



// import FavoriteList from "components/FavoriteList";
// import { useState } from "react";
// // import { useContext } from "react";
// // import { ThemeContext, themes } from "../../components/context/themeContext";

// import useToggle from "../../hooks/useToggle";
// import s from './Sidebar.module.css';

// const Sidebar = () => {


//   //USE_CONTEXT
//   // const { theme } = useContext(ThemeContext);
//   const [isOpen, setIsOpen] = useState(true);

//   // const [isOpen, toggleSidebar] = useToggle(true);

//   // const sidebar = theme === themes.light ? s.SidebarLight : s.SidebarDark;
//   // const sidebarClosed =
//   //   theme === themes.light || isOpen
//   //     ? s.SidebarClosedLight
//   //     : s.SidebarClosedDark;

//   return (
//     <div className={isOpen ?  s.SidebarLight : s.SidebarClosedLight}>
//       <div
//         className={s.SidebarDecorLight}
//         // className={
//         //   theme === themes.light ? s.SidebarDecorLight : s.SidebarDecorDark
//         // }
//       ></div>
//       <button
//         // onClick={toggleSidebar}
//         onClick={() => setIsOpen(prev => !prev)}
//         className={isOpen ? s.toggleBtnRight : s.toggleBtnLeft}
//         aria-label="toggleSidebar"
//       >
//         {isOpen ? (
//           <span className={s.svgWrapLeft}>
//             -
//           </span>
//         ) : (
//           <span className={s.svgWrapRight}>
//             +
//           </span>
//         )}
//       </button>
//       {/* <FavoriteList /> */}

//     </div>
//   );
// };

// export default Sidebar;