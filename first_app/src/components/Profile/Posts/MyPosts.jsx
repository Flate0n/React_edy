import profileName from './MyPosts.module.css'
import Post from './Post'


const MyPosts = ()=> {
    return (
      <div >
        <div className={profileName.head} >My posts</div>
          <div className={profileName.newPost}>
            
            <textarea className={profileName.postText}>new post</textarea>
            <button className={profileName.buttonCreatePost}>Create</button>
            
          </div>
          <Post/>
          <Post/>
      </div>
    )
        
}
export default MyPosts