import stule from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
  return (
    <div>
     <div className={stule.profile_heade} >
        <img className={stule.profile_heade_img} src={props.info.wrapperHead} />
      </div>
      <div className={stule.profile}>
        <img className={stule.profile_avatar_img} src={props.info.ava} />
        <div className={stule.profile_description} >
          <text>{props.info.name}</text>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo