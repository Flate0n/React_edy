import { NavLink } from 'react-router-dom'
import stule from './SideBar.module.css'



const SideBar = (props) => {

  let activeLink = (({ isActive }) => isActive ? stule.active : stule.item)

  const navBarElements = props.pages.sideBar.map(n => {
    return (
      <div>
        <NavLink to={n.link} className={activeLink} >{n.page}</NavLink>
      </div>
    )
  })

  return (
    <div className={stule.bar}>
      {navBarElements}
      <div style={{marginTop: '30px'}}>
        {props.pages.Frd.map(f => <div><img className={stule.freinds_ava} src={f.ava}/>{f.name}</div>)}
      </div>
     <text className={stule.item} >Freinds</text> 
    </div>
  )
}
export default SideBar