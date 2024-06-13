import stule from './NavBar.module.css'

const NavBar = ()=> {
    return <nav className= {stule.nav}>
    <div ><a className = {stule.item} href='/profile' >Profile</a></div>
    <div ><a className = {stule.item} href='/dialogs' >Masseges</a></div>
    <div ><a className = {stule.item} href='/news'>News</a></div>
    <div ><a className = {stule.item} href='/music' >Music</a></div>
    <div ><a className = {stule.item} href='/settings'>Settings</a></div>
  </nav>
        
}
export default NavBar