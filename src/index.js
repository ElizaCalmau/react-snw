
import reportWebVitals from './reportWebVitals';
import store from './redux/state' ;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App post={store.getState().profilePage.post} 
      friendsData={store.getState().messagesPage.friendsData} 
      messageData={store.getState().messagesPage.messageData}
      myFriends={store.getState().sidebar.myFriends}
      newPostText={store.getState().profilePage.newPostText}
      newTextMessage={store.getState().messagesPage.newTextMessage}
      
      addPost = {store.addPost.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}
      updateNewTextMessage={store.updateNewTextMessage.bind(store)}
      sendMessage={store.sendMessage.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>
);
}




rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
