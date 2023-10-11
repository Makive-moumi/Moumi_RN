// 마이페이지
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

const MyPage = () => {
  return(
    <Container>
      <ScrollView>

        <Header>
          <Title>마이페이지</Title>
        </Header>
  
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 13px 21px 27px 23px;
`;
// 마이페이지
const Title = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
`;

export default MyPage;