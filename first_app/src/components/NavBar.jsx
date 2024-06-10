import name from './NavBar.module.css'

const NavBar = ()=> {
    return <nav className= {name.nav}>
    <div ><a className = {name.item} href='#a' >Profile</a></div>
    <div ><a className = {name.item} href='#b' >Masseges</a></div>
    <div ><a className = {name.item} href='#c'>News</a></div>
    <div ><a className = {name.item} href='#d' >Music</a></div>
    <div ><a className = {name.item} href='#s'>Settings</a></div>
  </nav>
        
}
export default NavBar