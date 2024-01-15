import NewPost from './NewPost'
import Post from './Post'
import Style from './PostsList.module.css'
import { useState } from 'react'
import Modal from './Modal'

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPost] = useState([])

  function addPostHandler(postData) {
    setPost((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={Style.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p> Add some posts!</p>
        </div>
      )}
    </>
  )
}
export default PostsList
