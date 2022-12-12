import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 16,
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
                        message: 'Tên đăng nhập',
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
                        message: 'Mật khẩu',
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
                    span: 14,
                }}
            >
                <Checkbox>Lưu đăng nhập</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 14,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
