import React from 'react';
import { Link } from 'react-router-dom';

import './styles/header_menu.css';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    let content = null;

    if (user === null) {
      content =
          <div className='header-menu'>
            <ul className='header-menu-list'>
              <MenuItem url='/sign-in' text='Sign-in'/>
              <MenuItem url='/sign-up' text='Sign-up'/>
            </ul>
          </div>

    } else {

      content =
          <div className='header-menu-drop-down'>
            <span><h1>{user.name}</h1></span>
            <div className='header-menu-list-drop-down'>
              <ol className='user-header-menu-list'>
                <DropDownMenuItem url='/profile' text='My Account'/>
                <DropDownMenuItem url='/sign-out' text='Sign Out'/>
              </ol>
            </div>
          </div>

    };

    return (
      <div>
        {content}
      </div>
    );
  }
};

function DropDownMenuItem(props) {

  return(
    <li className='header-menu-item-drop-down'>
      <Link to={props.url}>{props.text}</Link>
    </li>
  );
};

function MenuItem(props) {

  return(
    <div className='header-menu-item'>
      <Link to={props.url}>{props.text}</Link>
    </div >
  );
};

export default HeaderMenu;