import React from 'react';
import { NavLink } from 'react-router-dom';
import SideFriends from './SideFriends';

import s from './Navbar.module.css'
console.log(s);
const Navbar = (props) => {
    let sideFriends = props.myFriends.map( sF => <SideFriends name={sF.name} />)
    return (
        <nav className= {s.nav}>
        <div className= {s.item}><NavLink to='/page1' className= { navData => navData.isActive ? s.active : s.item }> Profile</NavLink></div>
        <div className= {s.item}><NavLink to='/messages'className= { navData => navData.isActive ? s.active : s.item }>Messages</NavLink></div>
        <div className= {s.item}><NavLink to='/news'className= { navData => navData.isActive ? s.active : s.item}>News</NavLink></div>
        <div className= {s.item}><NavLink to='/music'className= { navData => navData.isActive ? s.active : s.item}>Music</NavLink></div>
        <div className= {s.item}><NavLink to='/settings'className= { navData => navData.isActive ? s.active : s.item}>Settings</NavLink></div>
        {sideFriends}
     </nav>
    )
}

export default Navbar;
