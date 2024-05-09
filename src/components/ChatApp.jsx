import React, { useState } from 'react';
import './ChatApp1.css';
// import './form.css';
import { MessagesSection, ChatBody } from './chatapp/other';

function ChatApp() {
  const [activeTab, setActiveTab] = useState('aaazaa1'); // State to keep track of active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="ChatApp">
    <div className="body-flex">
      <div className="head">
        <div className="head-cont">
          <div className="title-cont">
            <div>
              <span className="title-bg"></span>
              <span className="title"><h2>CHATAPP</h2></span>
            </div>
          </div>
          <div className="nav1">
            <span className={`aaaaaa1 ${activeTab === 'active1' ? 'active' : 'var'}`} onClick={() => handleTabClick('active1')}>Home</span>
            <span className={`aaaaaa1 ${activeTab === 'active2' ? 'active' : 'var'}`} onClick={() => handleTabClick('active2')}>Messages</span>
            <span className={`aaaaaa1 ${activeTab === 'active3' ? 'active' : 'var'}`} onClick={() => handleTabClick('active3')}>Settings</span>
            <span className={`aaaaaa1 ${activeTab === 'active4' ? 'active' : 'var'}`} onClick={() => handleTabClick('active4')}>Profile</span>
            <span className={`aaaaaa1 ${activeTab === 'active5' ? 'active' : 'var'}`} onClick={() => handleTabClick('active5')}>Notifications</span>
            <span className={`aaaaaa1 ${activeTab === 'active6' ? 'active' : 'var'}`} onClick={() => handleTabClick('active6')}>Shorts</span>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="lsidebar">
          <div className="lsidebar-cont">
            <FriendItem name="Sundar Pichai" username="sundar_p" />
          </div>
        </div>
        <div className="main">
          {/* Render other sections here */}
          <ChatBody />
        </div>
      </div>
    </div></div>
  );
}

function FriendItem({ name, username }) {
  return (
    <div className="friend-li">
      <div className="friend-img-cont">
        <img src="img/chatAppProfile.png" alt="" />
      </div>
      <div className="friend-info-cont">
        <div>
          <div className="friend-info-name">{name}</div>
          <div className="friend-info-id">{username}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
