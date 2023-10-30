import React from 'react';
import { Card } from 'antd';
import co5 from '../img/co5.jpg';
import co6 from '../img/co6.jpg';
import co7 from '../img/co7.jpg';

const { Meta } = Card;

function Contain() {

  return (
    <div style={{
      width: '900px',
      margin: '30px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Card
        style={{
          width: 280,
          margin: '20px',
        }}
        cover={
          <img
            alt="example"
            src={co5}
          />
        }
      >
        <Meta
          title="뉴스 타이틀"
          description="새로 나온 소식"
        />
      </Card>

      <Card
        style={{
          width: 280,
          margin: '20px',
        }}
        cover={
          <img
            alt="example"
            src={co6}
          />
        }
      >
        <Meta
          title="뉴스 타이틀"
          description="새로 나온 소식"
        />
      </Card>

      <Card
        style={{
          width: 280,
          margin: '20px',
        }}
        cover={
          <img
            alt="example"
            src={co7}
          />
        }
      >
        <Meta
          title="뉴스 타이틀"
          description="새로 나온 소식"
        />
      </Card>

    </div>
  )
}

export default Contain
