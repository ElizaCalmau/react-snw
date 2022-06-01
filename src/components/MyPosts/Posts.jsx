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
              <Post />
              <Post />
              <Post />
            </div>
          </div>
       </div> )
}
       export default Posts;