import { NavLink } from 'react-router-dom'
import stule from './SideBar.module.css'



const SideBar = (props) => {

  let activeLink = (({ isActive }) => isActive ? stule.active : stule.item)

  const navBarElements = props.pages.map(n => {
    return (
      <div>
        <NavLink to={n.link} className={activeLink} >{n.page}</NavLink>
      </div>
    )
  })

  return <div className={stule.bar}>
    {navBarElements}
  </div>

}
export default SideBar