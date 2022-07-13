
import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/Page1/Page1';
import MessagesContainer from './components/Messages/MessagesContainer';



const App = (props) => {
  

  return (
    <div className='app_wrapper'>
      
          <Header />
          <Navbar myFriends={props.myFriends}  store={props.store}/>
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/page1' element={<Page1
               posts={props.post} 
               store={props.store}
               dispatch={props.dispatch} // instead functions

               newPostText={props.newPostText}
               />} />
              <Route path='/messages' element={<MessagesContainer friends={props.friendsData} 
                messages={props.messageData}
                newTextMessage={props.newTextMessage}
                store={props.store}
                dispatch={props.dispatch}/>} />
              </Routes>
            </div>
      
     
    </div>
  )
}
export default App;
