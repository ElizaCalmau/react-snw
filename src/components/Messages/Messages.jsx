import React from 'react';
import s from './Messages.module.css'

const Messages = () => {
    return(
        <div className={s.messages}>
            <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        <div className={s.dialog}>Elizabth</div>
                        <div className={s.dialog}>Andrew</div>
                        <div className={s.dialog}>Mosya</div>
                    </div>
                    <div className={s.messageItems}>
                        <div className={s.mess}>Hi, Lapusik</div>
                        <div className={s.mess}>Wanna beer?</div>
                        <div className={s.mess}>Woof!</div>
                    </div>
            </div>
        </div>
    )
}
export default Messages;