import React from 'react';
import { Typography } from 'antd';
import { useState, useEffect } from 'react';
import fruitPresentsApi from '../../API/fruitPresentsApi';

function FruitPresents(props) {
    const { Title } = Typography;
    const [fruitsData, setFruitsData] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fruitPresentsApi.getAll();
            setFruitsData(response);
            console.log(response);
        }
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            <Title level={2} style={{ color: '#922a8d' }}>
                QUÀ TẶNG TRÁI CÂY
            </Title>
            ,
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 16px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src="https://theme.hstatic.net/200000528965/1000977879/14/home_collection_tabs_1_ico.png?v=109"
                        alt=""
                    />
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng 8/3
                    </Title>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 16px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src="https://theme.hstatic.net/200000528965/1000977879/14/home_collection_tabs_2_ico.png?v=109"
                        alt=""
                    />
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng 20/10
                    </Title>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 16px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src="https://theme.hstatic.net/200000528965/1000977879/14/home_collection_tabs_5_ico.png?v=109"
                        alt=""
                    />
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng valentine
                    </Title>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 16px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src="https://theme.hstatic.net/200000528965/1000977879/14/home_collection_tabs_3_ico.png?v=109"
                        alt=""
                    />
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng giáng sinh
                    </Title>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 16px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src="https://theme.hstatic.net/200000528965/1000977879/14/home_collection_tabs_1_ico.png?v=109"
                        alt=""
                    />
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng sinh nhật
                    </Title>
                </div>
            </div>
        </div>
    );
}

export default FruitPresents;
