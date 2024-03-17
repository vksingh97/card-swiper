import React from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo';

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

const MyCards: React.FC = () => {
  return (
    <MyCardsBody>
      <MyCardsLeftSection>
        <CardInfo />
      </MyCardsLeftSection>
      <MyCardsRightSection>hi</MyCardsRightSection>
    </MyCardsBody>
  );
};

export default MyCards;
