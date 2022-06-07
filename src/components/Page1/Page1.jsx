import React from 'react';
import s from './Page1.module.css';
import Posts from '../MyPosts/Posts.jsx';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
const Page1 = () => {
    return(<div className={s.page1}>
       
       <ProfileInfo />
       <Posts />
       
      </div>
    )
}

export default Page1;