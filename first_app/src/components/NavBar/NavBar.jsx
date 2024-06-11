import nameNav from './NavBar.module.css'
console.log(nameNav)
const NavBar = ()=> {
    return <nav className= {nameNav.nav}>
    <div ><a className = {nameNav.item} href='#a' >Profile</a></div>
    <div ><a className = {nameNav.item} href='#b' >Masseges</a></div>
    <div ><a className = {`${nameNav.item} ${nameNav.active}`} href='#c'>News</a></div>
    <div ><a className = {nameNav.item} href='#d' >Music</a></div>
    <div ><a className = {nameNav.item} href='#s'>Settings</a></div>
  </nav>
        
}
export default NavBar