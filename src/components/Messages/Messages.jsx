import React from 'react';
import Friends from './Friends/Friends';
import Letters from './Letters/Letters';
import s from './Messages.module.css'
import { sendMessageActionCreator } from '../../redux/messages-reducer';
import { updateNewTextMessageActionCreator} from '../../redux/messages-reducer';

const Messages = (props) => {
    let newMessage = React.createRef();
    let Send = () =>{  
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = () => {//текущие символы помещаются в state
        let text = newMessage.current.value;
        props.dispatch(updateNewTextMessageActionCreator(text));
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