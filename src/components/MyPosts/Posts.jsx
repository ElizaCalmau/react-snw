import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
const Posts = () => {
return( <div>
         my posts
          <div>
            <textarea></textarea>
            <button>Add</button>
            <div className={s.posts}>
              <Post message='Hello, world!' likesCount='11'/>
              <Post message='its me!' likesCount='1'/>
              <Post message='okay' likesCount='50'/>
            </div>
          </div>
       </div> )
}
       export default Posts;