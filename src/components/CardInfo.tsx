import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 414px;
  height: 248.85px;
  background-color: #01d167;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const AspireLogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 7%;
  top: 11%;
`;

const AspireLogo = styled.img`
  width: 83.52px;
  height: 23.7px;
`;
const CardHolderNameContainer = styled.div`
  position: relative;
  top: 10%;
  left: 6%;
`;
const CardHolderName = styled.p`
  font-family: 'Open Sans';
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
`;
const CardNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`;
const CardNumber = styled.p`
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 3.46pt;
`;
const CardMoreInfoContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 50px;
  height: 30px;
`;

const CardValidDate = styled.p`
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`;

const CardCVV = styled.p`
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
  margin: 12px 0px 0px 90px;
`;

const CardTransactionAgent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardAgentLogo = styled.img`
  margin: 0px 30px 0px 0px;
`;

const CardInfo: React.FC = () => {
  const [showFullNumber, setShowFullNumber] = useState<boolean>(false);
  const number = '1234567890452123';
  const maskedNumber = number
    ? number.slice(0, 4).replace(/(\d{1})/g, '*') +
      '   ' +
      number.slice(4, 8).replace(/(\d{1})/g, '*') +
      '   ' +
      number.slice(8, 12).replace(/(\d{1})/g, '*') +
      '   ' +
      number.slice(12)
    : '---';

  const unmasked = number
    ? number.slice(0, 4) +
      '   ' +
      number.slice(4, 8) +
      '   ' +
      number.slice(8, 12) +
      '   ' +
      number.slice(12)
    : '---';

  return (
    <Card>
      <AspireLogoContainer>
        <AspireLogo src='/icons/AspireLogoWhite.svg'></AspireLogo>
      </AspireLogoContainer>
      <CardHolderNameContainer>
        <CardHolderName>Mark Henry</CardHolderName>
      </CardHolderNameContainer>
      <CardNumberContainer>
        <CardNumber>{showFullNumber ? unmasked : maskedNumber}</CardNumber>
      </CardNumberContainer>
      <CardMoreInfoContainer>
        <CardValidDate>Thru: 12/20</CardValidDate>
        <CardCVV>CVV: ***</CardCVV>
      </CardMoreInfoContainer>
      <CardTransactionAgent>
        <CardAgentLogo src='/icons/VisaLogo.svg'></CardAgentLogo>
      </CardTransactionAgent>
    </Card>
  );
};

export default CardInfo;
