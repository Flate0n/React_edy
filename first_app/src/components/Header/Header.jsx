
import hederName from'./Header.module.css'
import icon from './icon.png'

const Header = ()=> {
    return (
        <heder className = {hederName.heder}> 

            <img className = {hederName.heder_img} src={icon}></img>
            <text className = {hederName.heder_text} >Test page</text>  

        </heder>
    )
    
}
export default Header