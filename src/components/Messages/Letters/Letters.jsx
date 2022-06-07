import React from "react";
import s from './Letters.module.css'

const Letters = (props) => {
    return (
        <div className={s.letter}>
            <img src="https://flyclipart.com/thumb2/sms-chat-message-information-memo-whatsapp-png-icon-free-321531.png"/> 
        {props.text}
        </div>

    )
}

export default Letters;