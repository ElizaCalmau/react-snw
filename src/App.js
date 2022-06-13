
import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Page1 from './components/Page1/Page1';



const App = (props) => {
  

  return (
    <div className='app_wrapper'>
      
          <Header />
          <Navbar myFriends={props.myFriends}  />
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/page1' element={<Page1 posts={props.post}/>} />
              <Route path='/messages' element={<Messages friends={props.friendsData} messages={props.messageData}/>} />
              </Routes>
            </div>
      
     
    </div>
  )
}
export default App;
