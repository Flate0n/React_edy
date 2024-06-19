/* import stule from './Profile.module.css' */
import MyPost from './Posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo info={props.profile.info} />
      <MyPost 
      profilePosts ={props.profile} 
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}
      />
    </div>
  )

}
export default Profile