import React from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const LoginForm = () => {
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
                label="email"
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'Vui lòng điền đúng địa chỉ email',
                    },
                    {
                        required: true,
                        message: 'Vui lòng điền email của bạn',
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
            Bạn chưa có tài khoản ? <Link href="/">Đăng Ký</Link>
        </Form>
    );
};

export default LoginForm;
