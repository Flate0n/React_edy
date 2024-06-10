import tegs from './Profile.module.css'

const Profile = ()=> {
    return (
      <div className={tegs.profile}>
          <div>
            <img className={tegs.profile_heade_img} src='https://i.pinimg.com/originals/0f/ab/7b/0fab7b5b292820bcd560a44b744597a2.jpg'/>  
          </div>  
          <div >
            <img className={tegs.profile_avatar_img} src='https://trikky.ru/wp-content/blogs.dir/1/files/2023/12/10/458c9d49f169b07cacd827acc3e1c7e6.jpg'/>
            <text className={tegs.profile_name}>Egor</text>
          </div>
          <div>new post</div>
          <div>post</div>
          <div>old post</div>
          <div>post</div>
        </div>
    )
        
}
export default Profile