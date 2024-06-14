
import stule from './Post.module.css'
import likes_img from './img/like_img.png'
import view_img from './img/view_img.png'


const Post = (props) => {
  return (
    <div >
      <img className={stule.post_avatar} src={props.avatar}></img>
      <div>{props.message}</div>
      <div className={stule.feedback}>
        <div className={stule.likes}>
          <img src={likes_img} />
          {props.likesCount}
        </div>
        <div className={stule.views}>
          <img src={view_img} />
          {props.viewsCount}
        </div>
      </div>
    </div>
  )

}
export default Post