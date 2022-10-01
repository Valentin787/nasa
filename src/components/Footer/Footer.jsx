import Link from './Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import s from './Footer.module.css'


const Footer = () => {

  return (
    <div className={s.footer}>
      <div className={s.iconWrap}>
        <Link
          link="https://github.com/Valentin787/nasa"
          title="Подивитись код"
          icon={
          <GitHubIcon
            sx={{
            fontSize: "36px",
          }} />}
      />
      <Link
        link="https://www.linkedin.com/analytics/profile-views/"
        title="Залишити відгук"
        icon={
          <LinkedInIcon
            sx={{
              fontSize: "38px",
            }} />}
      />
      </div>

      <p className={s.textBottom}>
        <span>&copy;</span>
        2022 - NASA. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer