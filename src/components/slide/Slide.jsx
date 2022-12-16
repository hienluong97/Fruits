import React from 'react';
import { Carousel } from 'antd';

function Slide(props) {
    const contentStyle = {
        width: '100%',
    };
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img
                        style={contentStyle}
                        src="https://theme.hstatic.net/200000528965/1000977879/14/slide_1_img.jpg?v=109"
                        alt="img1"
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="https://theme.hstatic.net/200000528965/1000977879/14/slide_2_img.jpg?v=109"
                        alt="img1"
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="https://theme.hstatic.net/200000528965/1000977879/14/slide_3_img.jpg?v=109"
                        alt="img1"
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="https://theme.hstatic.net/200000528965/1000977879/14/slide_4_img.jpg?v=109"
                        alt="img1"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Slide;
