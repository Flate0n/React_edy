import React from 'react'
import stule from './MyPosts.module.css'
import Post from './Post'



const MyPosts = (props) => {
  /* console.log(props) */

  let postElemetns = props.profilePosts.posts.map(p => {
    return (
      <Post avatar={p.ava} message={p.post} likesCount={p.likesCount} likesImg={props.profilePosts.likesImg} />)
  })

  let createNewPost = React.createRef()


  let addNewPost = () => {

    props.addPost()
  }

  let onPostChange = () => {
    let text = createNewPost.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={stule.postBlock}>
      <h4  >My posts</h4>
      <div className={stule.newPost}>
        <div >
          <textarea
            onChange={onPostChange}
            value={props.profilePosts.newPostText}
            ref={createNewPost}
            className={stule.postText} />
        </div>
        <div >
          <button
            onClick={addNewPost}
            className={stule.createPost} >Create</button>
        </div>
      </div>
      <div className={stule.posts}>
        {postElemetns}
      </div>
    </div>
  )

}
export default MyPosts