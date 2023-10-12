// 번역 내역 > 후기 쓰기 탭
import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const NoneReview = () => {
  return(
    <Container>
      
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

export default NoneReview;