
let state = {
    profilePage: {

        post:[
            {message:'hello, world!', likesCount: 10},
            {message: 'It is me!', likesCount: 22},
            {message: 'okay', likesCount: 25}
        ],
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
        ]
    },

    sidebar: {
        myFriends:[
           {name: 'Liza'} ,
           {name: 'Andrew'},
           {name: 'Mosya'}
        ]
       }
    
}


    export default state;