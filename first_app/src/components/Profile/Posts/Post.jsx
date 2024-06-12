import postName from './Post.module.css'
import likes_img from './img/like_img.png'
import view_img from './img/view_img.png'



const Post = (props)=> {
    return (
      <div >
          <img className = {postName.post_avatar} src={props.avatar}></img>
          <div>{props.message}</div>
          <div className={postName.feedback}>
            <div className = {postName.likes}>
              <img  src={likes_img} ></img>
              <text>{props.val_likes}</text>
            </div>
            <div className = {postName.views}>
              <img  src={view_img} ></img>
              <text>{props.val_views}</text>
              
            </div>
          </div>
      </div>
    )
        
}
export default Post