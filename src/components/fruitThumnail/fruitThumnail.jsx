import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Typography } from 'antd';

function FruitThumnail({ product }) {
    const { Title } = Typography;
    return (
        <div>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title}></img>
            </Link>
            <div>
                <p>{product.title}</p>
                <Link to={`/products/${product.id}`}>
                    <Title level={5} style={{ color: '#922a8d' }}>
                        Quà tặng 8/3
                    </Title>
                </Link>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>Buy now</Link>
                <Button type="primary">Chon mua</Button>
            </div>
        </div>
    );
}

export default FruitThumnail;
