import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
const Posts = () => {
return( <div className={s.posts}>
        <h3>my posts</h3> 
          <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add</button>
            </div>
            
            <div className={s.posts}>
              <Post message='Hello, world!' likesCount='11'/>
              <Post message='its me!' likesCount='1'/>
              <Post message='okay' likesCount='50'/>
            </div>
          </div>
       </div> )
}
       export default Posts;