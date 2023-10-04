// 도란도란 > 리스트 아이템
import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import DoranCover from '../assets/img_dorandoran_sample.png';

const DoranItem = () => {
  return(
    <Container>
      <Image
        style={styles.cover}
        source={DoranCover}
        resizeMode="cover"/>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: '100%',
  borderRadius: 20,
  },
});

const Container = styled.View`
  flex-direction: colunm;
`;

export default DoranItem;