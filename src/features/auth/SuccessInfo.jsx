import React from 'react';
import { Button, Result } from 'antd';
import { Typography } from 'antd';

function SuccessInfo(props) {
    const { Text, Link } = Typography;
    return (
        <Result
            status="success"
            title="Bạn đã đăng ký tài khoản thành công!"
            extra={[
                <Button type="primary" key="console">
                    <Link href="/" style={{ display: 'block' }}>
                        <Text style={{ color: 'white' }}>Go to homepage</Text>
                    </Link>
                </Button>,
            ]}
        />
    );
}

export default SuccessInfo;
