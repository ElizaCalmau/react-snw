let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_TEXT_MESSAGE='UPDATE-NEW-TEXT-MESSAGE';

const messagesPage = (state, action) => {

if (action.type === 'UPDATE_NEW_TEXT_MESSAGE'){
   state.newTextMessage = action.message;
}else if (action.type === 'SEND_MESSAGE'){
        let newMessage = {
            text: state.newTextMessage,
            id: 4
        }
        state.messageData.push(newMessage);
        state.newTextMessage=''
    }  
    return state;
}

export let sendMessageActionCreator = () => {
            
    return{
        type: 'SEND_MESSAGE'}
}

export let updateNewTextMessageActionCreator = (text) => {
    return{
        type: 'UPDATE_NEW_TEXT_MESSAGE',
         message: text
    }
}


export default messagesPage;