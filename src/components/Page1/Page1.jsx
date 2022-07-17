import React from 'react';
import s from './Page1.module.css';
import Posts from '../MyPosts/Posts.jsx';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import PostsContainer from '../MyPosts/PostsContainer';
const Page1 = (props) => {

    return(<div className={s.page1}>
       
       <ProfileInfo />
       <PostsContainer state={props.state} store = {props.store} post={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
       
      </div>
    )
}

export default Page1;