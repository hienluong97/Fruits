import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, Typography, Spin } from 'antd';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../login/userSlice';
import SuccessInfo from '../SuccessInfo';

const RegisterForm = ({ setMode }) => {
    const { Text } = Typography;
    // const onFinish = (values) => {
    //     console.log('Success:', values);
    // };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.loading);

    const [hasUser, setHasUser] = useState(false);

    // in the component
    const onFinish = async (values) => {
        try {
            const resultAction = await dispatch(register(values));
            const user = unwrapResult(resultAction);
            console.log(user);
            setHasUser(!hasUser);
        } catch (error) {
            console.log('fail to register');
        }
    };

    return (
        <>
            {hasUser ? (
                <SuccessInfo />
            ) : (
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
                            offset: 12,
                            span: 24,
                        }}
                    >
                        {isLoading ? (
                            <Spin size="small" style={{ transform: `translateX(-50%)` }} />
                        ) : (
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ transform: `translateX(-50%)`, cursor: 'pointer' }}
                            >
                                Đăng ký
                            </Button>
                        )}
                    </Form.Item>
                    Bạn đã có tài khoản ?{' '}
                    <Text onClick={setMode} style={{ cursor: 'pointer', color: '#1677ff' }}>
                        Đăng nhập
                    </Text>
                </Form>
            )}
        </>
    );
};

export default RegisterForm;
