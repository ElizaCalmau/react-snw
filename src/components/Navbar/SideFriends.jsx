import React from "react";
import s from './SideFriends.module.css'

const SideFriends = (props) =>{
    return(
        <div className={s.wrapper}>

        <div className={s.sideFriend}>
            {props.name}
        </div>
        </div>
    )
}
export default SideFriends;