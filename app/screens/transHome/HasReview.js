// 번역 내역 > 작성한 후기 탭
import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const HasReview = ({ route, navigation }) => {
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

export default HasReview;