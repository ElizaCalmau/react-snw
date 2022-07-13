import React from 'react';
import { act } from 'react-dom/test-utils';
import { sendMessageActionCreator } from '../../redux/messages-reducer';
import { updateNewTextMessageActionCreator} from '../../redux/messages-reducer';
import Messages from'./Messages'

const MessagesContainer = (props) => {
    
    let Send = () =>{  
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        let action = updateNewTextMessageActionCreator(text)
        props.store.dispatch(action);
    }
    return(
        <Messages friends={props.friends} 
        messages={props.messages} store={props.store} sendMessage={Send} updateNewTextMessage ={onMessageChange} newTextMessage={props.newTextMessage}/>
        
    )
}
export default MessagesContainer;