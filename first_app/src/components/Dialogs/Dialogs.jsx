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
  let dialogDate = [
    { id: 0, name: 'Mom' },
    { id: 1, name: 'Dad' },
    { id: 2, name: 'Seka' },
    { id: 3, name: 'Timas' },
    { id: 4, name: 'Me' }
  ]
  let massegeDate = [
    { id: 0, massege: 'Hi' },
    { id: 1, massege: 'What are you doing?' },
    { id: 2, massege: 'Start working' }
  ]

  let dialogElements = dialogDate.map(d => <DialogsItem name={d.name} id={d.id} />)

  let massegeElements = massegeDate.map(m => <Massege massege={m.massege} />)


  return (
    <div className={stule.dialogs} >

      <div className={stule.dialogsItem}>
        {dialogElements}
      </div>
      <div className={stule.masseges}>
        {massegeElements}
      </div>
    </div>
  )

}
export default Dialogs