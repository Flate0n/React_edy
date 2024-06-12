import profileName from './MyPosts.module.css'
import Post from './Post'
import ava0 from './img/ava_0.jpg'
import ava1 from './img/ava_1.jpg'
import ava2 from './img/ava_2.jpg'
import ava3 from './img/ava_3.jpg'


const MyPosts = ()=> {
    return (
      <div >
        <div className={profileName.head} >My posts</div>
          <div className={profileName.newPost}>
            
            <textarea className={profileName.postText}>new post</textarea>
            <button className={profileName.buttonCreatePost}>Create</button>
            
          </div>
          <Post avatar = {ava0} message = 'NYAAA :3' val_views = '345' val_likes = '340'/>
          <Post avatar = {ava1} message = 'Where is Kobayashi-san???' val_views = '12' val_likes = '10'/>
          <Post avatar = {ava2} message = {
          `Муку, сахар и щепотку соли смешайте.
          Яйцо взбейте с молоком, добавьте гашеную уксусом соду.
          Добавьте муку. Замесите до однородной массы.
          Тесто должно получиться густым. По необходимости добавьте еще муки.
          Порциями примерно со столовую ложку вылейте тесто на раскаленную сковороду.
          Обжарьте оладушки с обеих сторон на среднем огне.`} val_views = '151' val_likes = '80'/>
          <Post avatar = {ava3} message = 'Yes I heard about NEKO' val_views = '30' val_likes = '2'/>
      </div>
    )
        
}
export default MyPosts