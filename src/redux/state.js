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
        getState(){
            return this._state;
        },

    _callSubscriber() {
            console.log('State changed');
        },

    addPost() {
      
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
            
        this._callSubscriber(this._state);
        },

    sendMessage () {
            let newMessage = {
                text: this._state.messagesPage.newTextMessage,
                id: 4
            }
            this._state.messagesPage.messageData.push(newMessage);
            this._state.messagesPage.newTextMessage=''
            this._callSubscriber(this._state);
        },

    updateNewTextMessage (newMessage) {
        this._state.messagesPage.newTextMessage = newMessage;//?
        this._callSubscriber(this._state)
        },
    subscribe (observer){
        this._callSubscriber = observer;
        }
}


 
    export default store;
    window.store = store;

