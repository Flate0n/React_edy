import postName from './FeedbackPost.module.css'
import likes_img from './img/like_img.png'
import view_img from './img/view_img.png'



const FeedbackPost = (props)=> {
    return (
      <div className= {postName.feedback}>
        <div className= {postName.likes}>
          <img  src={props.Limg} /> 
          <text  >{props.LCount}</text>
        </div>
        <div className= {postName.views}>
          <img  src={props.Vimg} /> 
          <text >{props.VCount}</text>
        </div>
      </div>
    )
        
}
export default FeedbackPost