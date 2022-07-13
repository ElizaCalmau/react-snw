import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {
  let postData = props.post.map( (p) =>< Post message={p.message} likesCount={p.likesCount}/>)// с помощью мапинга отрисовываем джсх компоненту 

  let newPostElement = React.createRef();

  let onaddPosts = () => {
   props.addPost();
  }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text); 
    }


return( <div className={s.posts}>
        <h3>my posts</h3> 
          <div>
            <div>
            <textarea ref={ newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
            <button onClick={onaddPosts}>Add</button>
            </div>
            
            <div className={s.posts}>
              {postData}
            </div>
          </div>
       </div> )
}
       export default Posts;