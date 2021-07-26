import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    const user = useSelector(selectUser);


    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2890</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on your posts</p>
                    <p className='sidebar_statNumber'>1458</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("linux/unix")}
                {recentItem("machine_learning")}
                {recentItem("problem_solving")}
                {recentItem("developer")}
            </div>
        </div>
    );
}
export default Sidebar;