import React, { useState } from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo';
import { MyCardsProps, CardDetails } from '../types/types';

const MyCardsBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
const MyCardsRightSection = styled.div`
  width: 50%;
`;
const MyCardsLeftSection = styled.div`
  width: 50%;
`;
const CardOptions = styled.div`
  height: 116px;
  border-radius: 16px;
  background-color: #edf3ff;
  width: 414px;
  margin-top: 15%;
  display: flex;
  justify-content: space-around;
`;
const CardOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 0px 0px;
  cursor: pointer;
`;

const CardOptionLogo = styled.img``;

const CardOptionText = styled.p`
  text-align: center;
`;

const CardDetailCollapsibleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const CollapsibleHeader = styled.div`
  background-color: #f5f9ff;
  width: 366px;
  height: 72px;
  border-radius: 8px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;
const CollapsibleBody = styled.div`
  width: 366px;
  border-radius: 8px;
  margin: 10px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  position: relative;
  bottom: 30px;
  min-height: 200px;
`;
const DetailsLogo = styled.img``;
const HeaderName = styled.p`
  margin: 10px;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const HeaderRight = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const CollapsibleLogo = styled.img``;

const TransactionContainer = styled.div``;
const TransactionDetails = styled.div``;
const TransactionType = styled.div`
  display: flex;
  align-items: center;
  height: 0px;
  position: relative;
  left: 18%;
`;
const TransactionTypeLogo = styled.img``;
const BeneficiaryName = styled.p`
  height: 0px;
  font-family: 'Open Sans';
  font-weight: 700;
  color: #222222;
  font-size: 14px;
`;
const TransactionDate = styled.p`
  height: 0px;
  position: relative;
  bottom: 5px;
  font-family: 'Open Sans';
  font-weight: regular;
  color: #aaaaaa;
  font-size: 13px;
`;
const TransactionAmount = styled.p`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
`;
const LeftSection = styled.div`
  display: flex;
  margin: 10px;
`;
const LeftSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 10px;
  position: relative;
  bottom: 10px;
`;
const RightSection = styled.div`
  margin: 10px 30px 0px 0px;
`;
const TransactionLogoContainer = styled.div`
  background-color: #009dff1a;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TransactionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TransactionTypeLogoCheck = styled.img``;

const TransactionTypeText = styled.p`
  margin: 10px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #325baf;
  font-size: 12px;
`;

const TransactionTypeLogoCheckContainer = styled.div`
  background-color: #325baf;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewAllTransactionContainer = styled.div`
  width: 366px;
  height: 50px;
  background-color: #edfff5;
  border: 1px solid #ddffec;
  color: #01d167;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShowCardNumberContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  top: 22px;
  left: 35%;
  cursor: pointer;
`;
const ShowCardNumberLogo = styled.img``;
const ShowCardNumberText = styled.p`
  font-family: 'Open Sans';
  font-weight: 600;
  color: #01d167;
  font-size: 12px;
  margin: 10px;
`;

const MyCards: React.FC<MyCardsProps> = ({
  cardDetails,
}: {
  cardDetails: CardDetails[];
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [defaultCollapsible, setDefaultCollapsible] = useState<Number>(2);
  const [showFullNumber, setShowFullNumber] = useState<boolean>(false);

  const transactionData = [
    {
      id: 1,
      beneficiaryName: 'Hamleys',
      transactionDate: '20 May 2020',
      transactionType: 'credit',
      cardType: 'debit',
      category: 'shopping',
      amount: '150',
    },
    {
      id: 2,
      beneficiaryName: 'Hamleys',
      transactionDate: '20 May 2020',
      transactionType: 'debit',
      cardType: 'debit',
      category: 'shopping',
      amount: '150',
    },
    {
      id: 3,
      beneficiaryName: 'Hamleys',
      transactionDate: '20 May 2020',
      transactionType: 'debit',
      cardType: 'debit',
      category: 'shopping',
      amount: '150',
    },
    {
      id: 4,
      beneficiaryName: 'Hamleys',
      transactionDate: '20 May 2020',
      transactionType: 'debit',
      cardType: 'debit',
      category: 'shopping',
      amount: '150',
    },
  ];

  return (
    <div>
      <ShowCardNumberContainer
        onClick={() => setShowFullNumber(!showFullNumber)}
      >
        <ShowCardNumberLogo src='/icons/remove_red_eye-24px.svg'></ShowCardNumberLogo>
        <ShowCardNumberText>Show card number</ShowCardNumberText>
      </ShowCardNumberContainer>
      <MyCardsBody>
        <MyCardsLeftSection>
          <CardInfo showFullNumber={showFullNumber} cardDetails={cardDetails} />
          <CardOptions>
            <CardOptionContainer>
              <CardOptionLogo src='/icons/FreezeCard.svg'></CardOptionLogo>
              <CardOptionText>Freeze Card</CardOptionText>
            </CardOptionContainer>
            <CardOptionContainer>
              <CardOptionLogo src='/icons/SetSpendLimit.svg'></CardOptionLogo>
              <CardOptionText>Set spend limit</CardOptionText>
            </CardOptionContainer>
            <CardOptionContainer>
              <CardOptionLogo src='/icons/GPay.svg'></CardOptionLogo>
              <CardOptionText>Add to GPay</CardOptionText>
            </CardOptionContainer>
            <CardOptionContainer>
              <CardOptionLogo src='/icons/ReplaceCard.svg'></CardOptionLogo>
              <CardOptionText>Replace card</CardOptionText>
            </CardOptionContainer>
            <CardOptionContainer>
              <CardOptionLogo src='/icons/DeactivateCard.svg'></CardOptionLogo>
              <CardOptionText>Cancel card</CardOptionText>
            </CardOptionContainer>
          </CardOptions>
        </MyCardsLeftSection>
        <MyCardsRightSection>
          <CardDetailCollapsibleContainer>
            <CollapsibleHeader>
              <HeaderLeft>
                <DetailsLogo src='/icons/RecentTransaction.svg'></DetailsLogo>
                <HeaderName>Card Details</HeaderName>
              </HeaderLeft>
              <HeaderRight
                onClick={() => {
                  setCollapsed(!collapsed);
                  setDefaultCollapsible(1);
                }}
              >
                <CollapsibleLogo
                  src={
                    collapsed && defaultCollapsible === 1
                      ? '/icons/downArrow.svg'
                      : '/icons/upArrow.svg'
                  }
                ></CollapsibleLogo>
              </HeaderRight>
            </CollapsibleHeader>
            {collapsed && defaultCollapsible === 1 && (
              <CollapsibleBody>No content</CollapsibleBody>
            )}

            <CollapsibleHeader>
              <HeaderLeft>
                <DetailsLogo src='/icons/CardDetails.svg'></DetailsLogo>
                <HeaderName>Recent Transactions</HeaderName>
              </HeaderLeft>
              <HeaderRight
                onClick={() => {
                  setCollapsed(!collapsed);
                  setDefaultCollapsible(2);
                }}
              >
                <CollapsibleLogo
                  src={
                    collapsed && defaultCollapsible === 2
                      ? '/icons/downArrow.svg'
                      : '/icons/upArrow.svg'
                  }
                ></CollapsibleLogo>
              </HeaderRight>
            </CollapsibleHeader>
            {collapsed && defaultCollapsible === 2 && (
              <CollapsibleBody>
                {transactionData.map((transaction) => (
                  <TransactionContainer>
                    <TransactionDetails>
                      <TransactionSection>
                        <LeftSection>
                          <TransactionLogoContainer>
                            <TransactionTypeLogo src='/icons/file-storage.svg'></TransactionTypeLogo>
                          </TransactionLogoContainer>
                          <LeftSectionInfo>
                            <BeneficiaryName>
                              {transaction.beneficiaryName}
                            </BeneficiaryName>
                            <TransactionDate>
                              {transaction.transactionDate}
                            </TransactionDate>
                          </LeftSectionInfo>
                        </LeftSection>
                        <RightSection>
                          <TransactionAmount
                            style={{
                              color:
                                transaction.transactionType === 'debit'
                                  ? '#222222'
                                  : '#01D167',
                            }}
                          >
                            {`${
                              transaction.transactionType === 'debit'
                                ? '-'
                                : '+'
                            } S$ ${transaction.amount}`}
                          </TransactionAmount>
                        </RightSection>
                      </TransactionSection>
                    </TransactionDetails>
                    <TransactionType>
                      <TransactionTypeLogoCheckContainer>
                        <TransactionTypeLogoCheck src='/icons/business-and-finance.svg'></TransactionTypeLogoCheck>
                      </TransactionTypeLogoCheckContainer>
                      <TransactionTypeText>
                        {transaction.transactionType === 'credit'
                          ? 'Refund on debit card'
                          : 'Charged to debit card'}
                      </TransactionTypeText>
                    </TransactionType>
                    <br />
                  </TransactionContainer>
                ))}
                <ViewAllTransactionContainer>
                  View all card transactions
                </ViewAllTransactionContainer>
              </CollapsibleBody>
            )}
          </CardDetailCollapsibleContainer>
        </MyCardsRightSection>
      </MyCardsBody>
    </div>
  );
};

export default MyCards;
