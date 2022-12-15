import React from 'react';
import { Dropdown } from 'antd';
import { Typography } from 'antd';

function Fruits(props) {
    const { Title } = Typography;

    const items = [
        {
            key: '1',
            label: (
                <a target="_blankfff" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Cam
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Táo
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Nho
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
                    SẢN PHẨM
                </Title>
            </Dropdown>
        </>
    );
}

export default Fruits;
