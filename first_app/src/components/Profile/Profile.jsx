import stule from './Profile.module.css'
import ava from './profile__ava.jpg'
import profile__header from './profile__heder.jpg'
import MyPost from './Posts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div>
        <img className={stule.profile_heade_img} src={profile__header} />
      </div>
      <div >
        <img className={stule.profile_avatar_img} src={ava} />
        <text className={stule.profile_name}>Egor</text>
      </div>
      <MyPost />
    </div>
  )

}
export default Profile