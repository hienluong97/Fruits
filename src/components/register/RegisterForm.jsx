import React from 'react';
import { Button, Form, Input, Typography } from 'antd';

const RegisterForm = () => {
    const { Link } = Typography;
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
                label="name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tên của bạn',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Vui lòng nhập đúng địa chỉ email',
                    },
                    {
                        required: true,
                        message: 'Vui lòng nhập email của bạn',
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
                        message: 'Vui lòng nhập mật khẩu của bạn',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 14,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Đăng ký
                </Button>
            </Form.Item>
            Bạn đã có tài khoản ? <Link href="/">Đăng nhập</Link>
        </Form>
    );
};

export default RegisterForm;
