import { useState } from 'react'
import style from './NewPost.module.css'

function NewPost({ onCancel, onAddPost }) {
  const [enterBody, setEnterBody] = useState('')
  const [enterAuthor, setEnterAuthor] = useState('')

  function changeBodyHandler(event) {
    setEnterBody(event.target.value)
  }

  function changeAuthorHandler(event) {
    setEnterAuthor(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()

    const postData = {
      body: enterBody,
      author: enterAuthor,
    }
    onAddPost(postData)
    onCancel()
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={style.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}
export default NewPost
