import { NavLink } from 'react-router-dom'
import stule from './NavBar.module.css'

let activeLink = (({isActive}) => isActive ? stule.active : stule.item)

const NavBar = () => {
  return <nav className={stule.nav}>
    <div>
      <NavLink to='/profile' className={activeLink} >Profile</NavLink>
    </div>
    <div>
      <NavLink to='/dialogs' className={activeLink} >Masseges</NavLink>
    </div>
    <div>
      <NavLink to='/news' className={activeLink} >News</NavLink>
    </div>
    <div>
      <NavLink to='/music' className={activeLink} >Music</NavLink>
    </div>
    <div>
      <NavLink to='/settings' className={activeLink} >Settings</NavLink>
    </div>
  </nav>

}
export default NavBar