import React from 'react';
import { Dropdown } from 'antd';
import { Typography } from 'antd';

function FruitExplore(props) {
    const { Title } = Typography;

    const items = [
        {
            key: '1',
            label: (
                <a target="_blankfff" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Lịch sử
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Các sự kiện
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Video quảng cáo
                </a>
            ),
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottom"
            >
                <Title level={5} style={{ color: '#922a8d', cursor: 'pointer' }}>
                    KHÁM PHÁ KLEVER
                </Title>
            </Dropdown>
        </>
    );
}

export default FruitExplore;
