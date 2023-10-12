// 도란도란 상세
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const DoranDetail = () => {
  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#111111"/>

    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.doranBack};
  align-items: start;
  justify-content: flex-start;
`;

export default DoranDetail;