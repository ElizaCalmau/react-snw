import React from 'react';
import s from './Page1.module.css';
const Page1 = () => {
    return(
        <div className={s.page1}>
       <div>
         <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
       </div>
       <div>
         ava + description
       </div>
       <div>
         my posts
         <div>
           new post
         </div>
      <div className={s.posts}>
       <div className={s.item}>
         post1
         </div>
         <div className={s.item}>
           post2
         </div>
       </div>
       </div>
     </div>
    )
}

export default Page1;