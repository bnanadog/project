import React, { useState } from 'react';
import readlogo from '../img/read_logo.png';


function Header() {

  return (
    <div id='head'
      style={{
        width: '900px',
        height: '100px',
        margin: '0 auto',
      }}
    >

      <div id="logo">
        <a href="/">
          <img src={readlogo} alt="logo"
            style={{
              position: 'relative',
              bottom: '-15px',
              right: '-25px',
            }} />
        </a>
      </div>

      <a href="/Login" style={{ textDecorationLine: 'none', }}>
        <div id='register'
          style={{
            width: '120px',
            height: '20px',
            color: '#a11f11',
            position: 'relative',
            top: '-50px',
            right: '-750px',
          }}>
          회원가입/로그인
        </div>
      </a>

    </div>

  )
}

export default Header
