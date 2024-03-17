import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentBodyProps } from '../types/types';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme, Tabs, Form, Input } from 'antd';
import type { TabsProps } from 'antd';
import MyCards from './MyCards';
import { Modal } from 'antd';

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

const UserInfoBox = styled.div`
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
`;

const ContentBody: React.FC<ContentBodyProps> = ({ collapsed, onCollapse }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCardDetails, setNewCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    validDate: '',
    CVV: '',
    maskedNumber: '',
    unmaskedNumber: '',
    id: 4,
  });
  const [cardDetails, setCardDetails] = useState([
    {
      id: 1,
      cardNumber: '1234567890452123',
      maskedNumber: '**** **** **** 2123',
      unmaskedNumber: '1234 5678 9045 2123',
      cardHolderName: 'Mark Henry',
      validDate: '12/20',
      CVV: '***',
    },
    {
      id: 2,
      cardNumber: '6572956729476574',
      maskedNumber: '**** **** **** 6574',
      unmaskedNumber: '6572 9567 2947 6574',
      cardHolderName: 'John Cena',
      validDate: '06/24',
      CVV: '***',
    },
    {
      id: 3,
      cardNumber: '9856453647384512',
      maskedNumber: '**** **** **** 4512',
      unmaskedNumber: '9856 4536 4738 4512',
      cardHolderName: 'The Rock',
      validDate: '08/27',
      CVV: '***',
    },
  ]);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'My debit cards',
      children: (
        <UserInfoBox>
          <MyCards cardDetails={cardDetails} />
        </UserInfoBox>
      ),
    },
    {
      key: '2',
      label: 'All company cards',
      children: 'Content of Tab Pane 2',
    },
  ];

  const handleLocalSelect = (newKey: boolean) => {
    if (onCollapse) {
      onCollapse(newKey);
    }
  };
  const handleAddNewCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalAdd = () => {
    console.log(newCardDetails);
    const maskedNumber = newCardDetails.cardNumber
      ? newCardDetails.cardNumber.slice(0, 4).replace(/(\d{1})/g, '*') +
        '   ' +
        newCardDetails.cardNumber.slice(4, 8).replace(/(\d{1})/g, '*') +
        '   ' +
        newCardDetails.cardNumber.slice(8, 12).replace(/(\d{1})/g, '*') +
        '   ' +
        newCardDetails.cardNumber.slice(12)
      : '---';

    const unmasked = newCardDetails.cardNumber
      ? newCardDetails.cardNumber.slice(0, 4) +
        '   ' +
        newCardDetails.cardNumber.slice(4, 8) +
        '   ' +
        newCardDetails.cardNumber.slice(8, 12) +
        '   ' +
        newCardDetails.cardNumber.slice(12)
      : '---';
    newCardDetails.maskedNumber = maskedNumber;
    newCardDetails.unmaskedNumber = unmasked;
    // Handle card addition logic here (e.g., call an API to add the card)
    setCardDetails([...cardDetails, newCardDetails]); // Update card details state
    setIsModalVisible(false);
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
          <AddNewCard onClick={handleAddNewCardClick}>
            <AddIcon src='/icons/add.svg'></AddIcon>
            <NewCard>New card</NewCard>
          </AddNewCard>
        </MainBodyHeader>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </Content>
      <Modal
        visible={isModalVisible}
        title='Add New Card'
        onCancel={handleModalCancel}
        footer={[
          <Button key='back' onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key='submit' type='primary' onClick={handleModalAdd}>
            Add
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            label='Card Number'
            name='cardNumber'
            rules={[
              { required: true, message: 'Please input your card number!' },
              { max: 16, message: 'Card number cannot exceed 16 characters!' },
            ]}
          >
            <Input
              type='text'
              value={newCardDetails.cardNumber}
              onChange={(e) =>
                setNewCardDetails({
                  ...newCardDetails,
                  cardNumber: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label='Card Holder Name'
            name='cardHolderNumber'
            rules={[
              { required: true, message: 'Please enter card holder name!' },
            ]}
          >
            <Input
              type='text'
              value={newCardDetails.cardHolderName}
              onChange={(e) =>
                setNewCardDetails({
                  ...newCardDetails,
                  cardHolderName: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item
            label='CVV'
            name='cvv'
            rules={[{ required: true, message: 'Enter Cvv!' }]}
          >
            <Input
              type='text'
              value={newCardDetails.CVV}
              onChange={(e) =>
                setNewCardDetails({
                  ...newCardDetails,
                  CVV: '***',
                })
              }
            />
          </Form.Item>
          <Form.Item
            label='Valid Thru'
            name='validity'
            rules={[{ required: true, message: 'Please enter expiry!' }]}
          >
            <Input
              type='text'
              value={newCardDetails.validDate}
              onChange={(e) =>
                setNewCardDetails({
                  ...newCardDetails,
                  validDate: e.target.value,
                })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default ContentBody;
