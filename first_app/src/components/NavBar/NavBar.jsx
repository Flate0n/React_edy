import { NavLink } from 'react-router-dom'
import stule from './NavBar.module.css'



const NavBar = (props) => {

  let activeLink = (({ isActive }) => isActive ? stule.active : stule.item)

  const navBarElements = props.dateN.map(n => {
    return (
      <div>
        <NavLink to={n.link} className={activeLink} >{n.text}</NavLink>
      </div>
    )
  })

  return <nav className={stule.nav}>
    {navBarElements}
  </nav>

}
export default NavBar