// 번역내역 메인: 번역 내역 리스트
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

const TransHome = () => {
  return(
    <Container>
      <Text>ss</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;


export default TransHome;