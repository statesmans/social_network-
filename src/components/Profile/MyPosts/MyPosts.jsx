import React, { useEffect } from 'react'
import s from './MyPosts.module.scss'


const MyPosts = (props) => {
  const newPostText = React.createRef()

  useEffect(() => newPostText.current.value = props.profileText)

  function updatePostText() { 
    props.updateNewPostText(newPostText.current.value)
  }

  function addPost() {
    props.addNewPostText(newPostText.current.value)
  }

    


    return(
      <div className={s.posts}>
        <h3 className={s.posts__title}>My posts</h3>
        <textarea className={s.posts__input} onChange={updatePostText} ref={newPostText} type="text" placeholder="your news..."></textarea>
        <button className={s.posts__btn} onClick={ addPost }>Send</button>

        <div className={s.list}>
          {props.postsElements}
        </div>
      </div>
    )
}

export default MyPosts