// 번역 내역 리스트 > 작성된 후기 item
import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import CategoryTag from './CategoryTag';

import TransCover from "../assets/img_trans_cover.png";

const TransHomeItem2 = ({ image, title, categories, status, review, date }) => {
  return (
    <Container>
      <TopContents>
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
      </TopContents>

      <BottomContents>
        <ReviewContainer>
          <ReviewText>{review}</ReviewText>
          <ReviewDate>작성일 {date}</ReviewDate>
        </ReviewContainer>

        <TransTag>
          <TransTagText>후기 수정</TransTagText>
        </TransTag>
      </BottomContents>
    </Container>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: 100,
    height: 70,
    borderRadius: 20,
  }
});

const Container = styled.View`
  margin: 20px 30px;
`;
const TopContents = styled.View`
  flex-direction: row;
`;
const BottomContents = styled.View`
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
  margin-top: 15px;
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

const ReviewContainer = styled.View`
  margin-top: 19px;
  margin-bottom: 5px;
`;
const ReviewText = styled.Text`
  font-size: 12;
  font-weight: 400;
  color: ${({ theme }) => theme.review};
`;
const ReviewDate = styled.Text`
  font-size: 9;
  font-weight: 275;
  color: ${({ theme }) => theme.review};
  margin-top: 6px;
`;

export default TransHomeItem2;