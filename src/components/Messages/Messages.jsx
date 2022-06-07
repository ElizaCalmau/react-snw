import React from 'react';
import Friends from './Friends/Friends';
import Letters from './Letters/Letters';
import s from './Messages.module.css'

const Messages = () => {
    return(
        <div className={s.messages}>
                <div className={s.friends}>
                    <Friends nick='Liza' id='1'/>
                    <Friends nick='Andrew' id='2'/>
                    <Friends nick='Mosya' id='3'/>
                </div>                    
                    <div className={s.messageItems}>
                        <Letters text='Hi'/>
                        <Letters text='Hi'/>
                        <Letters text='Hi'/>
                    </div>
            </div>
        
    )
}
export default Messages;