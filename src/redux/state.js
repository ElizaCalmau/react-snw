let rerenderEntireTree = () => {

}

export let state = {

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

    }
    export let addPost = () => {
      
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.post.push(newPost);
        state.profilePage.newPostText='';
        rerenderEntireTree(state);
    }
    export let updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        
        rerenderEntireTree(state);
    }
    export let sendMessage = () => {
    let newMessage = {
        text: state.messagesPage.newTextMessage,
        id: 4
    }
    state.messagesPage.messageData.push(newMessage);
    state.messagesPage.newTextMessage=''
    rerenderEntireTree(state);
}

    export let updateNewTextMessage = (newMessage) => {
        state.messagesPage.newTextMessage = newMessage;//?
        rerenderEntireTree(state)
    } 
    export let subscribe = (observer) => {
        rerenderEntireTree = observer;
    }
    window.state = state

