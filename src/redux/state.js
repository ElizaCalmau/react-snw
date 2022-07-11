import propfilePage from './profilePage';
import messagesPage from './messagesPage';
import profilePage from './profilePage';
import sidebar from './sidebar';

let store={
    _state: {

        profilePage: {
    
            post:[
                {message:'hello, world!', likesCount: 10},
                {message: 'It is me!', likesCount: 22},
                {message: 'okay', likesCount: 25}
            ],
            newPostText:'it-kamasutra'
        },
        messagesPage: {
    
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
        },
    
        sidebar: {
            myFriends:[
               {name: 'Liza'} ,
               {name: 'Andrew'},
               {name: 'Mosya'}
            ]
           },
    
        },
        
    _callSubscriber() {
            console.log('State changed');
        },



    getState(){
            return this._state;
        },
    subscribe (observer){
        this._callSubscriber = observer;
        },


        
        dispatch(action) {
            profilePage(this._state.profilePage, action)
            messagesPage(this._state.messagesPage, action)
            sidebar(this._state.sidebar)

            this._callSubscriber(this._state)
            // if(action.type === 'ADD_POST'){
            //     let newPost = {
            //         id: 5,
            //         message: this._state.profilePage.newPostText,
            //         likesCount: 0
            //     };
            //     this._state.profilePage.post.push(newPost);
            //     this._state.profilePage.newPostText='';
            //     this._callSubscriber(this._state);
            // } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
            //     this._state.profilePage.newPostText = action.newText;//добавляем таким образом параметр объекта action
            
            //     this._callSubscriber(this._state);

            // } else if (action.type === 'SEND_MESSAGE'){ // эта ф-ция пушит в массив сообщений то, что на данный момент находится в textarea
            //     let newMessage = {
            //         text: this._state.messagesPage.newTextMessage,
            //         id: 4
            //     }
            //     this._state.messagesPage.messageData.push(newMessage);
            //     this._state.messagesPage.newTextMessage=''
            //     this._callSubscriber(this._state);
            // } else if (action.type === 'UPDATE_NEW_TEXT_MESSAGE'){
            //     this._state.messagesPage.newTextMessage = action.newMessage;
            }
            }




 
    export default store;
    window.store = store;

