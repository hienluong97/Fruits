import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../layouts/Header/Header';

const DefaultLayout = () => {
    const { Header, Footer, Content } = Layout;
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white' }}>
                {' '}
                <MainHeader />{' '}
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default DefaultLayout;
