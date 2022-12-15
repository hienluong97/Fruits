import React from 'react';
import { useState } from 'react';
import './index.css';
import { Col, Row, Modal } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import LoginForm from '../../../features/auth/login/LoginForm';
import RegisterForm from '../../../features/auth/register/RegisterForm';
import { Dropdown } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FruitPresents from './nav/FruitPresents';
import Fruits from './nav/Fruits';
import FreshFruit from './nav/FreshFruit';
import FruitExplore from './nav/FruitExplore';
import { logout } from '../../../features/auth/login/userSlice';

const MainHeader = () => {
    const { Text, Title, Link } = Typography;
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isLogin, setIsLogin] = useState(true);
    const handleMode = () => {
        setIsLogin(!isLogin);
    };

    const userInfor = useSelector((state) => state.user.current);
    const hasUser = !(Object.keys(userInfor).length === 0);
    const dispath = useDispatch();
    const handleLogout = () => {
        dispath(logout());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
    };

    const items = [
        {
            key: '1',
            label: <a href="https://www.antgroup.com">Thông tin tài khoản</a>,
        },
        {
            key: '2',
            label: <Text onClick={handleLogout}>Đăng xuất</Text>,
        },
    ];

    return (
        <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Col span={6}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/" style={{ display: 'block' }}>
                            <Title style={{ color: '#922a8d' }}>My Fruits</Title>
                        </Link>
                    </div>
                </Col>
                <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
                    <Search
                        placeholder="Bạn đang tìm kiếm gì ?"
                        allowClear
                        enterButton="Tìm kiếm nâng cao"
                        size="large"
                        onSearch={onSearch}
                        style={{ color: '#922a8d' }}
                    />
                </Col>
                <Col span={6}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <UserOutlined style={{ fontSize: '28px', color: '#922a8d' }} />
                            {hasUser ? (
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="bottom"
                                >
                                    <Text style={{ color: '#922a8d', fontWeight: 'bold' }}>{`${userInfor.name}`}</Text>
                                </Dropdown>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column' }} onClick={showModal}>
                                    <Text style={{ color: '#922a8d' }}>Đăng nhập / đăng kí</Text>
                                    <Text style={{ color: '#922a8d' }}>
                                        {' '}
                                        Tài khoản của tôi{' '}
                                        <DownOutlined style={{ fontSize: '12px', color: '#922a8d' }} />
                                    </Text>
                                </div>
                            )}

                            <Modal
                                title="  "
                                open={isModalOpen}
                                onCancel={handleCancel}
                                okButtonProps={{ style: { display: 'none' } }}
                                cancelButtonProps={{ style: { display: 'none' } }}
                            >
                                {isLogin ? <LoginForm setMode={handleMode} /> : <RegisterForm setMode={handleMode} />}
                            </Modal>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <ShoppingCartOutlined style={{ fontSize: '28px', color: '#922a8d' }} />
                            <div>
                                <Text style={{ color: '#922a8d' }}>Giỏ hàng</Text>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', gap: '32px' }}>
                <FruitPresents />
                <Fruits />
                <FreshFruit />
                <Title level={5} style={{ color: '#922a8d', cursor: 'pointer' }}>
                    GÓC DÀNH RIÊNG CHO BẠN
                </Title>
                <FruitExplore />
            </Row>
        </div>
    );
};

export default MainHeader;
