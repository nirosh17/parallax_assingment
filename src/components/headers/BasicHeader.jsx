import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const BasicHeader = () => {
  return (
    <Header>
      <div className="logo" />
    </Header>
  );
};

export default BasicHeader;
