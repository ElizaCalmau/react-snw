
import reportWebVitals from './reportWebVitals';
import {state} from './redux/state' ;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './redux/state';
import { updateNewPostText } from './redux/state';
import { updateNewTextMessage } from './redux/state';
import {sendMessage} from './redux/state'; 
import { subscribe } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App post={state.profilePage.post} 
      friendsData={state.messagesPage.friendsData} 
      messageData={state.messagesPage.messageData}
      myFriends={state.sidebar.myFriends}
      addPost = {addPost}
      newPostText ={state.profilePage.newPostText}
      updateNewPostText={updateNewPostText}
      newTextMessage={state.messagesPage.newTextMessage}
      updateNewTextMessage={updateNewTextMessage}
      sendMessage={sendMessage}/>
    </BrowserRouter>
  </React.StrictMode>
);
}




rerenderEntireTree(state);
subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
