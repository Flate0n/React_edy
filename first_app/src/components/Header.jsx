
import hederName from'./Header.module.css'

const Header = ()=> {
    return (
        <heder className = {hederName.heder}> 

            <img className = {hederName.heder_img} src='https://cdn-icons-png.flaticon.com/512/1674/1674969.png' ></img>
            <text className = {hederName.heder_text} >Test page</text>  

        </heder>
    )
    
}
export default Header