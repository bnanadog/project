
import React from 'react'
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login() {

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '30px', }}>로그인</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 15,
          }}
          style={{
            maxWidth: 600,
            margin: '20px 0 0 0',
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: '아이디를 입력하세요.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력하세요.',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >

            <Button type="primary" htmlType="submit"
              style={{ margin: '-20px 10px 0 -35px', width: '200px', }}>
              구글로 시작하기
            </Button>
            <Button type="primary" htmlType="submit" style={{ margin: '10px 0 0 -35px', width: '200px', backgroundColor: '#a11f11' }}>
              로그인
            </Button>
            <p>
              <Button type="primary" htmlType="submit" style={{ margin: '0 -35px', width: '200px', backgroundColor: '#a11f11'}}>
                회원가입
              </Button>
            </p>
          </Form.Item>
        </Form>
      </div>
      <p style={{ textAlign: 'center', color: '#a11f11', marginTop: '-20px' }}>비밀번호 찾기</p>
    </div>

  )
}

export default Login
