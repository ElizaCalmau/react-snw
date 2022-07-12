import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import Posts from './Posts';
import { addPostActionCreator } from '../../redux/profilePage';
import { updateNewPostTextActionCreator } from '../../redux/profilePage';


const PostsContainer = (props) => {

  
  let onAddPosts = () => {
    props.dispatch(addPostActionCreator())
  }

    let onPostChange = () => {
      let action=(updateNewPostTextActionCreator())
      props.dispatch(action)
    }
  

return( <Posts updateNewPostText = {onPostChange} addPost={onAddPosts} post={props.posts}/>)
}
       export default PostsContainer;