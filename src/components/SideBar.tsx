import React from 'react';
import styled from 'styled-components';
import { Layout, Typography } from 'antd';
import { SideBarProps } from '../types/types';
const { Sider } = Layout;

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

const AspireLogoIcon = styled.img``;

const SideBar: React.FC<SideBarProps> = ({
  collapsed,
  selectedKey,
  onSelect,
}) => {
  const handleLocalSelect = (newKey: string) => {
    if (onSelect) {
      onSelect(newKey);
    }
  };

  return (
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
          <AspireLogoIcon src='/icons/AspireLogo.svg' />
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
        <MenuItem key={'1'} onClick={() => handleLocalSelect('1')}>
          <MenuItemIcon src={'/icons/Home.svg'}></MenuItemIcon>
          {!collapsed && (
            <MenuItemText
              style={{ color: selectedKey === '1' ? '#01D167' : '#ffffff' }}
            >
              Home
            </MenuItemText>
          )}
        </MenuItem>
        <MenuItem key={'2'} onClick={() => handleLocalSelect('2')}>
          <MenuItemIcon src='/icons/Card.svg'></MenuItemIcon>
          {!collapsed && (
            <MenuItemText
              style={{ color: selectedKey === '2' ? '#01D167' : '#ffffff' }}
            >
              Cards
            </MenuItemText>
          )}
        </MenuItem>
        <MenuItem key={'3'} onClick={() => handleLocalSelect('3')}>
          <MenuItemIcon src='/icons/Payments.svg'></MenuItemIcon>
          {!collapsed && (
            <MenuItemText
              style={{ color: selectedKey === '3' ? '#01D167' : '#ffffff' }}
            >
              Payments
            </MenuItemText>
          )}
        </MenuItem>
        <MenuItem key={'4'} onClick={() => handleLocalSelect('4')}>
          <MenuItemIcon src='/icons/Credit.svg'></MenuItemIcon>
          {!collapsed && (
            <MenuItemText
              style={{ color: selectedKey === '4' ? '#01D167' : '#ffffff' }}
            >
              Credit
            </MenuItemText>
          )}
        </MenuItem>
        <MenuItem key={'5'} onClick={() => handleLocalSelect('5')}>
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
  );
};

export default SideBar;
