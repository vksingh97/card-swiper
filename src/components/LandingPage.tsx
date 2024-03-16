import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography } from 'antd';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  margin: 15px;
`;
const MenuItemText = styled.h2`
  font-family: Open Sans;
  font-weight: 500;
  font-size: 16px;
  color: white;
  position: relative;
  bottom: 7px;
  margin: 10px;
`;
const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const AspireLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AvailableBalance = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const AvailableBalanceText = styled.p``;
const AddNewCard = styled.div`
  width: 109px;
  height: 35px;
  background-color: #325baf;
  border-radius: 5px;
  position: relative;
  top: 35px;
`;
const BalanceAmount = styled.div`
  display: flex;
`;
const DollarSign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 24px;
  background-color: #01d167;
  border-radius: 5px;
`;
const Amount = styled.p`
  font-size: 26px;
  color: #222222;
  font-family: 'Open Sans';
  font-weight: bold;
  margin: -6px 0px 0px 10px;
`;
const DollarSignText = styled.p`
  font-size: 13px;
  color: #ffffff;
  font-family: 'Open Sans';
  font-weight: bold;
`;

const AddIcon = styled.img``;

const NewCard = styled.p``;

const LandingPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>('2'); // Initial selected key
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width='20%'
        style={{
          backgroundColor: '#0C365A',
        }}
      >
        {!collapsed && (
          <AspireLogo>
            <img src='/icons/AspireLogo.svg' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography.Title
                level={4}
                style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#FFFFFF',
                  opacity: '30%',
                }}
              >
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
              </Typography.Title>
            </div>
          </AspireLogo>
        )}
        <MenuItems style={{ margin: !collapsed ? '0px 0px 0px 30px' : '10px' }}>
          <MenuItem key={'1'} onClick={() => setSelectedKey('1')}>
            <MenuItemIcon src={'/icons/Home.svg'}></MenuItemIcon>
            {!collapsed && (
              <MenuItemText
                style={{ color: selectedKey === '1' ? '#01D167' : '#ffffff' }}
              >
                Home
              </MenuItemText>
            )}
          </MenuItem>
          <MenuItem key={'2'} onClick={() => setSelectedKey('2')}>
            <MenuItemIcon src='/icons/Card.svg'></MenuItemIcon>
            {!collapsed && (
              <MenuItemText
                style={{ color: selectedKey === '2' ? '#01D167' : '#ffffff' }}
              >
                Cards
              </MenuItemText>
            )}
          </MenuItem>
          <MenuItem key={'3'} onClick={() => setSelectedKey('3')}>
            <MenuItemIcon src='/icons/Payments.svg'></MenuItemIcon>
            {!collapsed && (
              <MenuItemText
                style={{ color: selectedKey === '3' ? '#01D167' : '#ffffff' }}
              >
                Payments
              </MenuItemText>
            )}
          </MenuItem>
          <MenuItem key={'4'} onClick={() => setSelectedKey('4')}>
            <MenuItemIcon src='/icons/Credit.svg'></MenuItemIcon>
            {!collapsed && (
              <MenuItemText
                style={{ color: selectedKey === '4' ? '#01D167' : '#ffffff' }}
              >
                Credit
              </MenuItemText>
            )}
          </MenuItem>
          <MenuItem key={'5'} onClick={() => setSelectedKey('5')}>
            <MenuItemIcon src='/icons/Account.svg'></MenuItemIcon>
            {!collapsed && (
              <MenuItemText
                style={{ color: selectedKey === '5' ? '#01D167' : '#ffffff' }}
              >
                Settings
              </MenuItemText>
            )}
          </MenuItem>
        </MenuItems>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={
              collapsed ? (
                <MenuUnfoldOutlined
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              ) : (
                <MenuFoldOutlined
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: '30px 50px 0px 50px',
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <MainBodyHeader>
            <AvailableBalance>
              <AvailableBalanceText>Available Balance</AvailableBalanceText>
              <BalanceAmount>
                <DollarSign>
                  <DollarSignText>S$</DollarSignText>
                </DollarSign>
                <Amount>3,000</Amount>
              </BalanceAmount>
            </AvailableBalance>
            <AddNewCard>
              <AddIcon src='/icons/add.svg'></AddIcon>
              <NewCard></NewCard>
            </AddNewCard>
          </MainBodyHeader>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LandingPage;
