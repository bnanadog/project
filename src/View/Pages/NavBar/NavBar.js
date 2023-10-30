import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div id='menu'>
      <ul>
        <li><a href='/Info' style={{
          textDecorationLine: 'none',
          color: 'inherit',
        }}>커피정보</a></li>
        <li>뉴스</li>
        <li>커뮤니티</li>
        <li>칼럼</li>
      </ul>
    </div>
  )
}

export default NavBar;