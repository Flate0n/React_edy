import stule from './MyPosts.module.css'
import Post from './Post'
import ava0 from './img/ava_0.jpg'
import ava1 from './img/ava_1.jpg'
import ava2 from './img/ava_2.jpg'
import ava3 from './img/ava_3.jpg'


const MyPosts = () => {
  let poastsDate = [
    { id: 0, post: 'NYAAA :3', ava: ava0, viewsCount: 345, likesCount: 340 },
    { id: 1, post: 'Where is Kobayashi-san???', ava: ava1, viewsCount: 456, likesCount: 281 },
    {
      id: 2, post: `
      Рецепт оладушек :
      Муку, сахар и щепотку соли смешайте.
      Яйцо взбейте с молоком, добавьте гашеную уксусом соду.
      Добавьте муку. Замесите до однородной массы.
      Тесто должно получиться густым. По необходимости добавьте еще муки.
      Порциями примерно со столовую ложку вылейте тесто на раскаленную сковороду.
      Обжарьте оладушки с обеих сторон на среднем огне.`
      , ava: ava2, viewsCount: 9999, likesCount: 5340
    },
    { id: 3, post: 'Да, я слышала о NEKO', ava: ava3, viewsCount: 23, likesCount: 10 },
  ]
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
        <Post avatar={poastsDate[0].ava} message={poastsDate[0].post} viewsCount={poastsDate[0].viewsCount} likesCount={poastsDate[0].likesCount} />
        <Post avatar={poastsDate[1].ava} message={poastsDate[1].post} viewsCount={poastsDate[1].viewsCount} likesCount={poastsDate[1].likesCount} />
        <Post avatar={poastsDate[2].ava} message={poastsDate[2].post} viewsCount={poastsDate[2].viewsCount} likesCount={poastsDate[2].likesCount} />
        <Post avatar={poastsDate[3].ava} message={poastsDate[3].post} viewsCount={poastsDate[3].viewsCount} likesCount={poastsDate[3].likesCount} />
      </div>
    </div>
  )

}
export default MyPosts