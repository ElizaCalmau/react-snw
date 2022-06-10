import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

// let post= [{message:'hello, world!', likesCount: 10}, {message: 'It is me!', likesCount: 22}, {message: 'okay', likesCount: 25}]
// let friendsData = [{nick: 'Liza', id: 1}, {nick: 'Andrew', id: 2}, {nick: 'Mosya', id: 3}]
// let messageData = [{text: 'Hi', id: 1}, {text: 'Wanna beer?', id: 2}, {text: 'Woof', id: 3}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App post={state.profilePage.post} friendsData={state.messagesPage.friendsData} messageData={state.messagesPage.messageData}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
