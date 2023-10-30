import React from 'react'
import { Button } from 'antd';

function Aside() {
  return (
    <div style={{position: 'absolute', bottom: '50px', right:'50px'}}>
      <Button style={{margin: '10px', backgroundColor: '#a11f11', color:'#fff'}}>다음 기사</Button>
      <Button style={{backgroundColor: '#a11f11', color:'#fff'}}>이전 기사</Button>
    </div>
  )
}

export default Aside
