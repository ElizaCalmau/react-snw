import React from 'react';
import s from './Page1.module.css';
import Posts from '../MyPosts/Posts.jsx';
const Page1 = () => {
    return(<div className={s.page1}>
       <div>
         <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
       </div>
       <div>
         ava + description
       </div>
       <div>
       <Posts />
       </div>
      </div>
    )
}

export default Page1;