import { NavLink } from 'react-router-dom'
import stule from './Dialogs.module.css'

let activeLink = (({ isActive }) => isActive ? stule.active : stule.dialog)

export const DialogsItem = (props) => {

  let path = `/dialogs/${props.id}`

  return <div><NavLink className={activeLink} to={path}>{props.name}</NavLink></div>
}

export const Massege = (props) => {

  return <div className={stule.massege}>{props.massege}</div>
}

