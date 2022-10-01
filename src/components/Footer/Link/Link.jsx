import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip';
import s from '../Footer.module.css'

const Link = ({link,title,icon}) => {
  return (
    <Tooltip title={title}>
       <a
        className={s.link}
        href={link}
        target="_blank"
      >
        {icon}
        </a>
        </Tooltip>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  icon:PropTypes.node,
}

export default Link