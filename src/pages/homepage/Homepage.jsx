import React from 'react';
import FruitPresents from '../../components/fruitPresents/FruitPresents';
import Slide from '../../components/slide/Slide';

function Homepage(props) {
    return (
        <div>
            <Slide />
            <div style={{ padding: '0 100px' }}>
                <FruitPresents />
            </div>
        </div>
    );
}

export default Homepage;
