/* import stule from './Profile.module.css' */
import MyPost from './Posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo info={props.profile.info} />
      <MyPost profilePosts ={props.profile} />
    </div>
  )

}
export default Profile