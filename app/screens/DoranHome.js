// 도란도란 메인
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import SearchIcon from '../assets/ic_search.png';
import { FilterLists, DoranItem } from '../components';
import Footer from '../components/Footer';

const DoranHome = () => {
  const demoData = [{"title": "나의 식생활 진단하기", "categories": ["뉴스", "일상"]},
  {"title": "나의 식생활 진단하기", "categories": ["뉴스", "일상"]},
  {"title": "나의 식생활 진단하기", "categories": ["뉴스", "일상"]}];

  return (
    <Container>
      <ScrollView>

        <Header>
          <Title>도란도란</Title>
          <Image
            style={styles.search}
            source={SearchIcon}/>
        </Header>

        {/* 선택된 필터 */}
        <FilterLists/>

        {/* 도란도란 글 리스트 */}
        <DoranList>
          {demoData.map((demo, idx) => (
            <DoranItem 
              key={idx}
              title={demo.title}
              categories={demo.categories}/>
          ))}
        </DoranList>
      </ScrollView>
      <Footer/>
    </Container>
  );
}

const styles = StyleSheet.create({
  search: {
    width: 22,
    height: 22,
    marginLeft: 'auto',
  },
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 13px 21px 24px 23px;
`;
// 도란도란
const Title = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
`;

// 도란도란 아이템
const DoranList = styled.View`
  margin: 30px 22px 20px 22px;
`;


export default DoranHome;

/*
npm install --save styled-components
npm install --save prop-types
*/