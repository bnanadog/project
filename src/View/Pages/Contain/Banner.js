import React from 'react'
import { Carousel } from 'antd';
import co1 from '../img/co1.jpg';
import co2 from '../img/co2.jpg';
import co3 from '../img/co3.jpg';
import co4 from '../img/co4.jpg';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

function Banner() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img src={co1} alt="배너이미지1" style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={co2} alt="배너이미지2" style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={co3} alt="배너이미지3" style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={co4} alt="배너이미지4" style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} /></h3>
      </div>
    </Carousel>
  );
}

export default Banner
