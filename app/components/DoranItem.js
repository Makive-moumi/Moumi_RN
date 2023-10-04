// 도란도란 > 리스트 아이템
import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';

import CategoryTag from './CategoryTag';

import DoranCover from '../assets/img_dorandoran_sample.png';
import BookmarkUnselect from '../assets/ic_bookmark_unselected.png';
import BookmarkSelect from '../assets/ic_bookmark_selected.png';

const DoranItem = () => {
  return(
    <Container>
      <Image
        style={styles.cover}
        source={DoranCover}
        resizeMode="cover"/>

      <DoranInfo>
        <DoranTitle>나의 식생활 진단하기</DoranTitle>
        <Image
          style={styles.bookmark}
          source={BookmarkUnselect}/>
      </DoranInfo>

      <CategoryList>
        <CategoryTag category={"뉴스"}/>
        <CategoryTag category={"일상"}/>
      </CategoryList>

    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    borderRadius: 20,
  },
  bookmark: {
    width: 27,
    height: 24,
    marginLeft: 'auto',
  }
});

const Container = styled.View`
  
`;

// 도란도란 설명
const DoranInfo = styled.View`
  margin: 15px 2px 0px 1px;
  flex-direction: row;
  justify-content: flex-start;
`;

// 도란도란 제목
const DoranTitle = styled.Text`
  font-size: 15;
  color: ${({ theme }) => theme.doranTitle};
`;

// 카테고리 리스트
const CategoryList = styled.View`
  flex-direction: row;
  margin-left: 1px;
`;


export default DoranItem;