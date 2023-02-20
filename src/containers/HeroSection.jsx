import React from 'react';
import { Image, Col, Row, Typography } from 'antd';
import logo from '../assets/parallax-logo.png';

const { Title } = Typography;

const HeroSection = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={3}>Welcome to Parallax Technologies</Title>
        </Col>
        <Col span={24}>
          <Image width={500} src={logo} preview={false} />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
