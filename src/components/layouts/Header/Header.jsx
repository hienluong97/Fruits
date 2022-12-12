import React from 'react';
import { useState } from 'react';
import './index.css';
import { Col, Row, Modal } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import LoginForm from '../../login/LoginForm';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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

    const items = [
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                },
                {
                    type: 'group',
                    label: 'Item 2',
                },
            ],
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
                            <div style={{ display: 'flex', flexDirection: 'column' }} onClick={showModal}>
                                <Text style={{ color: '#922a8d' }}>Đăng nhập / đăng kí</Text>
                                <Text style={{ color: '#922a8d' }}>
                                    {' '}
                                    Tài khoản của tôi <DownOutlined style={{ fontSize: '12px', color: '#922a8d' }} />
                                </Text>
                            </div>
                            <Modal
                                title="ĐĂNG NHẬP"
                                open={isModalOpen}
                                onCancel={handleCancel}
                                okButtonProps={{ style: { display: 'none' } }}
                                cancelButtonProps={{ style: { display: 'none' } }}
                            >
                                <LoginForm />
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
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <Link href="/" style={{ display: 'block' }}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        QUÀ TẶNG TRÁI CÂY
                    </Title>
                </Link>
                <Link href="/" style={{ display: 'block' }}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        SẢN PHẨM
                    </Title>
                </Link>
                <Link href="/" style={{ display: 'block' }}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        TRÁI CÂY TƯƠI HÀNG NGÀY
                    </Title>
                </Link>
                <Link href="/" style={{ display: 'block' }}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        GÓC DÀNH RIÊNG CHO BẠN
                    </Title>
                </Link>
                <Link href="/" style={{ display: 'block' }}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        KHÁM PHÁ KLEVER
                    </Title>
                </Link>
            </Row>
        </div>
    );
};

export default MainHeader;