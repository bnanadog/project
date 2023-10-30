import React from 'react';
import { Card } from 'antd';
import Banner from './Banner';
import co5 from '../img/co5.jpg';
import co6 from '../img/co6.jpg';
import co7 from '../img/co7.jpg';

const { Meta } = Card;

function Contain() {

  return (
    <div>
      <Banner />
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
            height: 300,
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
            description="헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다."
          />
        </Card>

        <Card
          style={{
            width: 280,
            height: 300,
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
            description="국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다."
          />
        </Card>

        <Card
          style={{
            width: 280,
            height: 300,
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
            description="재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는"
          />
        </Card>

      </div>
    </div>
  )
}

export default Contain
