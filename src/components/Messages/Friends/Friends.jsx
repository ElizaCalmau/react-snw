import React from "react";
import { NavLink } from "react-router-dom";
import s from './Friends.module.css'

const Friends = (props) => {
    return (
       <NavLink to={'./' + props.id}>

       <div className={s.user}>
                <img src='https://static.thenounproject.com/png/801408-200.png'/>
                {props.nick}
         </div>
       </NavLink>
    )
}
export default Friends;