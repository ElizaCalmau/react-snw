import React from 'react';
import Friends from './Friends/Friends';
import Letters from './Letters/Letters';
import s from './Messages.module.css'


// let friendsData = [{nick: 'Liza', id: 1}, {nick: 'Andrew', id: 2}, {nick: 'Mosya', id: 3}]
// let messageData = [{text: 'Hi', id: 1}, {text: 'Wanna beer?', id: 2}, {text: 'Woof', id: 3}]

// let friend = props.friendsData.map( f => <Friends nick={f.nick} id={f.id}/>)
// let message = props.messageData.map( m => <Letters text={m.text}/>);
const Messages = (props) => {
    let newMessage = React.createRef();
    let Send = () =>{
        //props.sendMessage();
        let action = {type : 'SEND-MESSAGE'};
        props.dispatch(action)
    }
    let onMessageChange = () => {//текущие символы помещаются в state
        let text = newMessage.current.value;
        //props.updateNewTextMessage(text);
        let action = {type: 'UPDATE-NEW-TEXT-MESSAGE', newMessage: text};
        props.dispatch(action);
    }
    let friend = props.friends.map( f => <Friends nick={f.nick} id={f.id}/>)
    let message = props.messages.map( m => <Letters text={m.text} />);
    return(
        <div className={s.messages}>
                <div className={s.friends}>
                   {friend}
                </div>                    
                    <div className={s.messageItems}>
                        {message}
                        <div>
        <textarea ref={newMessage} value={props.newTextMessage} onChange={onMessageChange}></textarea>
        <button onClick={Send}>Send</button>
        </div>
                    </div>
            </div>
        
    )
}
export default Messages;