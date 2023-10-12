// 번역 내역 리스트 item
import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import CategoryTag from './CategoryTag';

import TransCover from "../assets/img_trans_cover.png";

const TransHomeItem = ({ image, title, categories, status }) => {
  return (
    <Container>
      <Image
        style={styles.cover}
        source={{uri: image}}
        resizeMode="cover"/>
      <TransInfo>
        <Title>{title}</Title>
        <CategoryList>
          {categories != null ?
            categories.map((cate, idx) => (
              <CategoryTag key={idx} category={cate}/>
            ))
            : null
          }
        </CategoryList>        
      </TransInfo>

      <TransTag>
        <TransTagText>{status}</TransTagText>
      </TransTag>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: 145,
    height: 111,
    borderRadius: 20,
  }
});

const Container = styled.View`
  margin: 20px 30px;
  flex-direction: row;
`;
const TransInfo = styled.View`
  margin-left: 25px;
  margin-top: 6px;
`;
const Title = styled.Text`
  font-size: 14;
  font-weight: 400;
  margin-left: 1px;
  color: ${({ theme }) => theme.doranTitle};
`;
// 카테고리 리스트
const CategoryList = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;

// 진행 상황 tag
const TransTag = styled.View`
  width: 86px;
  height: 31px;
  margin-left: auto;
  margin-top: auto;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.transTag};
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
const TransTagText = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${({ theme }) => theme.transTag};
`;

const TransDoneTag = styled.View`
  width: 86px;
  height: 31px;
  margin-left: auto;
  margin-top: auto;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
const TransDoneTagText = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${({ theme }) => theme.mainColor};
`;

export default TransHomeItem;