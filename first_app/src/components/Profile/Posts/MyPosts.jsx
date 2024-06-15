import stule from './MyPosts.module.css'
import Post from './Post'



const MyPosts = (props) => {
  /* console.log(props) */
  let postElemetns = props.dateP.map(p => <Post avatar={p.ava} message={p.post} likesCount={p.likesCount} likesImg = {p.likesImg} />)
  
  return (
    <div className={stule.postBlock}>
      <h4  >My posts</h4>
      <div className={stule.newPost}>
        <div >
          <textarea className={stule.postText} >new post</textarea>
        </div>
        <div >
          <button className={stule.createPost} >Create</button>
        </div>
      </div>
      <div className={stule.posts}>
        {postElemetns}
      </div>
    </div>
  )

}
export default MyPosts