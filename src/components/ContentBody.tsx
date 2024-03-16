import React from 'react';
import styled from 'styled-components';
import { ContentBodyProps } from '../types/types';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

const { Header, Content } = Layout;

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
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

const NewCard = styled.p`
  font-family: 'Open Sans';
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
`;

const ContentBody: React.FC<ContentBodyProps> = ({ collapsed, onCollapse }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLocalSelect = (newKey: boolean) => {
    if (onCollapse) {
      onCollapse(newKey);
    }
  };
  return (
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
          onClick={() => handleLocalSelect(!collapsed)}
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
            <NewCard>New card</NewCard>
          </AddNewCard>
        </MainBodyHeader>
      </Content>
    </Layout>
  );
};

export default ContentBody;
