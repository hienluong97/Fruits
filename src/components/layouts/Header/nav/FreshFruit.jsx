import React from 'react';
import { Dropdown } from 'antd';
import { Typography } from 'antd';

function FreshFruit(props) {
    const { Title } = Typography;

    const items = [
        {
            key: '1',
            label: (
                <a target="_blankfff" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Quà ngày 8/3
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Quà ngày 8/3
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Quà ngày 8/3
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
                    TRÁI CÂY TƯƠI HẰNG NGÀY
                </Title>
            </Dropdown>
        </>
    );
}

export default FreshFruit;
