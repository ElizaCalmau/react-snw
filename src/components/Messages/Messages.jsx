import React from 'react';
import Friends from './Friends/Friends';
import Letters from './Letters/Letters';
import s from './Messages.module.css'


let friendsData = [{nick: 'Liza', id: 1}, {nick: 'Andrew', id: 2}, {nick: 'Mosya', id: 3}]
let messageData = [{text: 'Hi', id: 1}, {text: 'Wanna beer?', id: 2}, {text: 'Woof', id: 3}]

let friend = friendsData.map( f => <Friends nick={f.nick} id={f.id}/>)
let message = messageData.map( m => <Letters text={m.text}/>);
const Messages = () => {
    return(
        <div className={s.messages}>
                <div className={s.friends}>
                   {friend}
                </div>                    
                    <div className={s.messageItems}>
                        {message}
                    </div>
            </div>
        
    )
}
export default Messages;