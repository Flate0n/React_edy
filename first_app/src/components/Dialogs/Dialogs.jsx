import { NavLink } from 'react-router-dom'
import stule from './Dialogs.module.css'

let activeLink = (({ isActive }) => isActive ? stule.active : stule.dialog)

const DialogsItem = (props) => {

  let path = `/dialogs/${props.id}`

  return <div><NavLink className={activeLink} to={path}>{props.name}</NavLink></div>
}

const Massege = (props) => {

  return <div className={stule.massege}>{props.massege}</div>
}


const Dialogs = (props) => {
  return (
    <div className={stule.dialogs} >
      <div className={stule.dialogsItem}>
        <DialogsItem name='Mom' id='0' />
        <DialogsItem name='Dad' id='1' />
        <DialogsItem name='Seka' id='2' />
        <DialogsItem name='Timas' id='3' />
      </div>
      <div className={stule.masseges}>
        <Massege massege='Hi' />
        <Massege massege='What are you doing?' />
        <Massege massege='Start working' />
      </div>
    </div>
  )

}
export default Dialogs