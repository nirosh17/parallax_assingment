/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Space, Col, Row } from 'antd';
import UnitTableSection from '../containers/UnitTableSection';
import HeroSection from '../containers/HeroSection';
import logo from '../assets/parallax-logo.png';
import BasicFooter from '../components/footers/BasicFooter';
import BasicHeader from '../components/headers/BasicHeader';

const { Header, Content, Footer } = Layout;

const LandingPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout className="layout">
        <BasicHeader />
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Units</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
            <Row gutter={[16, 72]}>
              <Col span={24}>
                <HeroSection />
              </Col>
              <Col span={24}>
                <UnitTableSection />
              </Col>
            </Row>
          </div>
        </Content>
        <BasicFooter />
      </Layout>
    </div>
  );
};

export default LandingPage;
