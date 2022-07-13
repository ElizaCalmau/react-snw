let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_TEXT_MESSAGE='UPDATE-NEW-TEXT-MESSAGE';
let initialState = {
    friendsData:[
        {nick: 'Liza', id: 1},
        {nick: 'Andrew', id: 2},
        {nick: 'Mosya', id: 3}
    ],

    messageData:[
        {text: 'Hi', id: 1},
        {text: 'Wanna beer?', id: 2},
        {text: 'Woof', id: 3}
    ],
    newTextMessage:'it-kamasutra'
}
const messagesReducer = (state = initialState, action) => {
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

    // switch(action.type){
    //     case UPDATE_NEW_TEXT_MESSAGE: 
    //     state.newTextMessage = action.message;
    //     return state;
    //     case SEND_MESSAGE:
    //         let newMessage = {
    //                         text: state.newTextMessage,
    //                         id: 4
    //                     }
    //                     state.messageData.push(newMessage);
    //                     state.newTextMessage=''
    //                     return state;
    //                     default: return state;

    // }
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


export default messagesReducer;