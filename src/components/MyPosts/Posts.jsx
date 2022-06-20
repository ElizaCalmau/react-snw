import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';


// let post= [{message:'hello, world!', likesCount: 10}, {message: 'It is me!', likesCount: 22}, {message: 'okay', likesCount: 25}]


const Posts = (props) => {
  let postData = props.post.map( (p) =>< Post message={p.message} likesCount={p.likesCount}/>)
  
  let newPostElement = React.createRef();
  
  let addPosts = () => {
   // props.addPost();
   let action = {type : 'ADD-POST'}
   props.dispatch(action)
  }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      //props.updateNewPostText(text);
      let action = {type : 'UPDATE-NEW-POST-TEXT', newText : text};// action это объект а type: newText: - это его свойства
      props.dispatch(action)// вызов объекта 
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