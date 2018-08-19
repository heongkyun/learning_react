import React from 'react';
import classNames from 'classnames';
import HomeIcon from 'react-icons/lib/md/home';
import NotificationIcon from 'react-icons/lib/md/notifications';
import MailIcon from 'react-icons/lib/md/mail';
import './HeaderNav.scss';

const HeaderNavItem = ({ children, selected, tab, iconType, onSelect }) => {
    const icon = iconType ? React.createElement(iconType) : null;
    return (
    //   <div className={`HeaderNavItem ${selected === tab ? 'active' : ''}`}>
    <div
      className={classNames('HeaderNavItem', {
        active: selected === tab,
      })}
      onClick={() => onSelect(tab)} // (2) onClick 에서 새 함수 만들어서 onSelect 호출
    >
        <div className="icon">{icon}</div>
        <div className="text">{children}</div>
      </div>
    );
};
  
const HeaderNav = ({ tab, onSelect }) => {
    return (
      <div className="HeaderNav">
        <HeaderNavItem 
            iconType={HomeIcon} 
            tab="home" 
            selected={tab} 
            onSelect={onSelect}
        >
          홈
        </HeaderNavItem>
        <HeaderNavItem
          iconType={NotificationIcon}
          tab="notification"
          selected={tab}
          onSelect={onSelect}
        >
          알림
        </HeaderNavItem>
        <HeaderNavItem 
            iconType={MailIcon} 
            tab="message" 
            selected={tab}
            onSelect={onSelect}
        >
          쪽지
        </HeaderNavItem>
      </div>
    );
};
  
  export default HeaderNav;