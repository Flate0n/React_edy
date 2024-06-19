
import stule from './Post.module.css'

const Post = (props) => {
  /* console.log(props) */
 
  return (
    <div >
      <img className={stule.post_avatar} src={props.avatar}></img>
      <div>{props.message}</div>
      <div className={stule.feedback}>
        <div className={stule.likes}>
          <img  className={stule.likes_img} src={props.likesImg} />
          <text className={stule.likes_count} >{props.likesCount}</text>
        </div>
      </div>
    </div>
  )

}
export default Post