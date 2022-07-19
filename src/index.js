
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store' ;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App store={store}
     post={store.getState().profilePage.post} 
      friendsData={store.getState().messagesPage.friendsData} 
      messageData={store.getState().messagesPage.messageData}
      myFriends={store.getState().sidebar.myFriends}
      newPostText={store.getState().profilePage.newPostText}
      newTextMessage={store.getState().messagesPage.newTextMessage}
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
}




rerenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
