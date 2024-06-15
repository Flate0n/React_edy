import stule from './ProfileInfo.module.css'
import ava from './img/profile__ava.jpg'
import profile_header_img from './img/profile__heder.jpg'


const ProfileInfo = () => {
  return (
    <div>
      <div className={stule.profile_heade} >
        <img className={stule.profile_heade_img} src={profile_header_img} />
      </div>
      <div className={stule.profile}>
        <img className={stule.profile_avatar_img} src={ava} />
        <div className={stule.profile_description} >
          <text>Egor</text>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo