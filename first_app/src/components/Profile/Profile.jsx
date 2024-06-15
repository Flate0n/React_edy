import stule from './Profile.module.css'
import ava from './profile__ava.jpg'
import profile__header from './profile__heder.jpg'
import MyPost from './Posts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div className={stule.profile_heade} >
        <img className={stule.profile_heade_img} src={profile__header} />
      </div>
      <div className={stule.profile}>
        <img className={stule.profile_avatar_img} src={ava} />
        <div className={stule.profile_description} >
          <text>Egor</text>
        </div>
      </div>
      <MyPost />
    </div>
  )

}
export default Profile