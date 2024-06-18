import { NavLink } from 'react-router-dom'
import stule from './DialogsItems.module.css'

let activeLink = (({ isActive }) => isActive ? stule.active : stule.dialog)

export const DialogsItem = (props) => {

  let dialogElements = props.date.map(d => {
    return (
      <div className={stule.dialog}  >
        <img className={stule.avatar_img} src={d.ava}></img>
        <NavLink className={activeLink} to={`/dialogs/${d.id}`}>
          {d.name}
        </NavLink>
      </div>
      )})



  return dialogElements 
}


export const Massege = (props) => {

  let massegeElements = props.massege.map(m => {
    if(m.id%2==0){
    return (
      <div className={stule.levo}  >
        {m.massege}
      </div>
      )  
    }
    else{
      return (
        <div className={stule.pravo}  >
          {m.massege}
        </div>
        )
    }
    })
  
  return massegeElements

}

