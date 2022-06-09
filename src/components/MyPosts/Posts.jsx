import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';


let post= [{message:'hello, world!', likesCount: 10}, {message: 'It is me!', likesCount: 22}, {message: 'okay', likesCount: 25}]

let postData = post.map( (p) =>< Post message={p.message} likesCount={p.likesCount}/>)

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
              {postData};
            </div>
          </div>
       </div> )
}
       export default Posts;