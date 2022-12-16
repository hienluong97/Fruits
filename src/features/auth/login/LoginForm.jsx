import React from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '../login/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const LoginForm = ({ setMode, handleCloseModal }) => {
    const { Text } = Typography;
    const dispatch = useDispatch();
    const [hasUser, setHasUser] = useState(false);

    const onFinish = async (values) => {
        try {
            const resultAction = await dispatch(login(values));
            const user = unwrapResult(resultAction);
            console.log(user);
            setHasUser(!hasUser);
            handleCloseModal();
        } catch (error) {
            console.log('fail to login');
        }
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
            Bạn chưa có tài khoản ?{' '}
            <Text onClick={setMode} style={{ cursor: 'pointer', color: '#1677ff' }}>
                Đăng Ký
            </Text>
        </Form>
    );
};

export default LoginForm;
