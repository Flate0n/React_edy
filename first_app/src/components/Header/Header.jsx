
import stule from'./Header.module.css'
import icon from './icon.png'

const Header = ()=> {
    return (
        <heder className = {stule.heder}> 

            <img className = {stule.heder_img} src={icon}></img>
            <text className = {stule.heder_text} >Test page</text>  

        </heder>
    )
    
}
export default Header