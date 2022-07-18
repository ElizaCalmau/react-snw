import React from 'react';
import { act } from 'react-dom/test-utils';
import { sendMessageActionCreator } from '../../redux/messages-reducer';
import { updateNewTextMessageActionCreator} from '../../redux/messages-reducer';
import Messages from'./Messages'
import {connect} from 'react-redux';

// const MessagesContainer = (props) => {
    
//     let Send = () =>{  
//         props.store.dispatch(sendMessageActionCreator())
//     }

//     let onMessageChange = (text) => {
//         let action = updateNewTextMessageActionCreator(text)
//         props.store.dispatch(action);
//     }
//     return(
//         <Messages friends={props.friends} 
//         messages={props.messages} store={props.store} sendMessage={Send} updateNewTextMessage ={onMessageChange} newTextMessage={props.newTextMessage}/>
        
//     )
// }

let mapStateToProps = (state) => {
    return {
        friends: state.messagesPage.friendsData,
        messages: state.messagesPage.messageData,
        newTextMessage: state.messagesPage.newTextMessage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewTextMessage: (text) => {
            let action = updateNewTextMessageActionCreator(text)
            dispatch(action);
        }
    }
}

let MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages);
export default MessagesContainer;