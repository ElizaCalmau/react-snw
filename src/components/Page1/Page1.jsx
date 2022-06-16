import React from 'react';
import s from './Page1.module.css';
import Posts from '../MyPosts/Posts.jsx';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
const Page1 = (props) => {
  // let post= [{message:'hello, world!', likesCount: 10}, {message: 'It is me!', likesCount: 22}, {message: 'okay', likesCount: 25}]

    return(<div className={s.page1}>
       
       <ProfileInfo />
       <Posts post={props.posts} addPost={props.addPost} newPostText={props.newPostText}  updateNewPostText={props.updateNewPostText}/>
       
      </div>
    )
}

export default Page1;