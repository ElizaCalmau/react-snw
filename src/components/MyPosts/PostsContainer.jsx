import React from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import {connect} from 'react-redux'

// const PostsContainer = (props) => {
  
  
//   let onaddPosts = () => {
//     props.store.dispatch(addPostActionCreator())
//   }
//     let onPostChange = (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       props.store.dispatch(action);
//     }


// return( <Posts store={props.store} updateNewPostText = {onPostChange} addPost={onaddPosts} post={props.post} newPostText={props.newPostText} dispatch={props.dispatch}/>)
// }

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
    // post: state.profilePage.post,
    // newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateNewPostText: (text) =>{
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
      
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

let PostsContainer = connect (mapStateToProps, mapDispatchToProps) (Posts);
       export default PostsContainer;
       