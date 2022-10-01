import NavItem from 'components/Navigation/NavItem'
import LoginIcon from '@mui/icons-material/Login';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <nav className={s.container}>
      <NavItem
        key={"Sing In"}
        name={"Sing In"}
        icon={<LoginIcon sx={{ fontSize: 22 }} />}
        link={"/sing_in"}
      />
      <NavItem
        key={"Register"}
        name={"Register"}
        icon={<GroupAddSharpIcon />}
        link={"/register"}
      />
    </nav>
  )
}

export default AuthNav