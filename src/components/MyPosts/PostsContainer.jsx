import React from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';


const PostsContainer = (props) => {
  
  
  let onaddPosts = () => {
    props.store.dispatch(addPostActionCreator())
  }
    let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
    }


return( <Posts store={props.store} updateNewPostText = {onPostChange} addPost={onaddPosts} post={props.post} newPostText={props.newPostText} dispatch={props.dispatch}/>)
}
       export default PostsContainer;
       