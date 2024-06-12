import FeedbackPost from './FeedbackPost'
import postName from './Post.module.css'
import likes_img from './img/like_img.png'
import view_img from './img/view_img.png'


const Post = (props)=> {
    return (
      <div >
          <img className = {postName.post_avatar} src={props.avatar}></img>
          <div>{props.message}</div>
          <FeedbackPost LCount = {props.likesCount} Limg = {likes_img} VCount = {props.viewsCount} Vimg = {view_img}/>
      </div>
    )
        
}
export default Post