import React, { useState } from 'react';

import { Layout } from 'antd';
import SideBar from './SideBar';
import ContentBody from './ContentBody';

const LandingPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string>('2');

  const handleSelect = (newKey: string) => {
    setSelectedKey(newKey);
  };
  const handleCollapse = (newKey: boolean) => {
    setCollapsed(newKey);
  };

  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <SideBar
        collapsed={collapsed}
        selectedKey={selectedKey}
        onSelect={handleSelect}
      />
      <ContentBody collapsed={collapsed} onCollapse={handleCollapse} />
    </Layout>
  );
};

export default LandingPage;
