// 도란도란 > 리스트 아이템
import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import CategoryTag from './CategoryTag';

import DoranCover from '../assets/img_dorandoran_sample.png';
import BookmarkUnselect from '../assets/ic_bookmark_unselected.png';
import BookmarkSelect from '../assets/ic_bookmark_selected.png';

const DoranItem = ({ imgUri, title, categories }) => {
  return(
    <Container>
      <Image
        style={styles.cover}
        source={imgUri}
        resizeMode="cover"/>

      <DoranInfo>
        <DoranTitle>{title}</DoranTitle>
        <Image
          style={styles.bookmark}
          source={BookmarkUnselect}/>
      </DoranInfo>

      <CategoryList>
        {categories.map((cate, idx) => (
          <CategoryTag key={idx} category={cate}/>
        ))}
      </CategoryList>

    </Container>
  );
}

DoranItem.defaultProps = {
  imgUri: DoranCover,
};

DoranItem.propTypes = {
  imgUri: PropTypes.string,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array,
};

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