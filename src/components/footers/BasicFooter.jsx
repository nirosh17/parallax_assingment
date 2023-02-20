import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const BasicFooter = () => {
  return (
    <div>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Nirosh Raja ©2023 Created for the Parallax Assignment
      </Footer>
    </div>
  );
};

export default BasicFooter;
