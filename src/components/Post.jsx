import style from './Post.module.css'

function Post({ author, body }) {
  return (
    <div className={style.post}>
      <p className={style.author}>{author}</p>
      <p className={style.text}>{body}</p>
    </div>
  )
}
export default Post
