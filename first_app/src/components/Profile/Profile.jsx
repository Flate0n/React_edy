/* import stule from './Profile.module.css' */
import MyPost from './Posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
 /*  console.log(props) */
  return (
    <div>
      <ProfileInfo />
      <MyPost dateP ={props.dateP} />
    </div>
  )

}
export default Profile