import React from 'react';
import Friends from './Friends/Friends';
import Letters from './Letters/Letters';
import s from './Messages.module.css'

const Messages = (props) => {
    let newMessage = React.createRef();
    let Send = () =>{  
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewTextMessage(text);
    }
    let state = props.messagesPage;
    let friend = state.friendsData.map( f => <Friends nick={f.nick} key={f.id} id={f.id}/>)
    let message = state.messageData.map( m => <Letters text={m.text} key={m.id}/>);
    return(
        <div className={s.messages}>
                <div className={s.friends}>
                   {friend}
                </div>                    
                    <div className={s.messageItems}>
                        {message}
                        <div>
        <textarea ref={newMessage} value={state.newTextMessage} onChange={onMessageChange}></textarea>
        <button onClick={Send}>Send</button>
        </div>
                    </div>
            </div>
        
    )
}
export default Messages;