import React from 'react'
import { Carousel } from 'antd';
import co1 from '../img/co1.jpg';
import co2 from '../img/co2.jpg';
import co3 from '../img/co3.jpg';
import co4 from '../img/co4.jpg';


function Banner() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src={co1} style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} />
      </div>
      <div>
        <img src={co2} style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} />
      </div>
      <div>
        <img src={co3} style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} />
      </div>
      <div>
        <img src={co4} style={{ width: '500px', height: '200px', objectFit: 'cover', margin: '20px auto' }} />
      </div>
    </Carousel>
  );
}

export default Banner
