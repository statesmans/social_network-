 import { connect } from 'react-redux'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import Post from './Post/Post'


let mapStateToProps = (state) => {
  let postsElements = state.profilePage.posts.map( (p, i) => (<Post key={i.toString()} 
                                                                    message={p.message} 
                                                                    likesCount={p.likesCount}/>))

  return {
          profileText: state.profilePage.text,
          postsElements: postsElements
        }
}

let mapDispatchToProps = (dispatch) => {

  return {
    updateNewPostText: (text) => {
      let action = updatePostTextActionCreator(text)
      dispatch( action )
    },

    addNewPostText: (text) => {
      let action = addPostActionCreator(text)
      dispatch( action )
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer