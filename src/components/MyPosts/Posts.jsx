import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../redux/profilePage';
import { updateNewPostTextActionCreator } from '../../redux/profilePage';

const Posts = (props) => {
  let postData = props.post.map( (p) =>< Post message={p.message} likesCount={p.likesCount}/>)// с помощью мапинга отрисовываем джсх компоненту 

  let newPostElement = React.createRef();
  
  let addPosts = () => {
   props.dispatch(addPostActionCreator())
  }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text))// вызов объекта 
    }
  

return( <div className={s.posts}>
        <h3>my posts</h3> 
          <div>
            <div>
            <textarea ref={ newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
            <button onClick={addPosts}>Add</button>
            </div>
            
            <div className={s.posts}>
              {postData}
            </div>
          </div>
       </div> )
}
       export default Posts;