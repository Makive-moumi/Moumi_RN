// 도란도란 메인
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, Alert } from 'react-native';
import styled from 'styled-components/native';

import SearchIcon from '../assets/ic_search.png';

import { FilterLists, DoranItem } from '../components';
import Footer from '../components/Footer';

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const DoranHome = () => {
  const [doranList, setDoranList] = useState([]);

  // 도란도란
  const getDoranList = async () => {
    try {
      const params = {
        page: 0
      }

      const doran = await axios.post(
        BASEURL + `/dorandoran`, {
          category: null
        }, {
          params: params
        }
      );

      const contents = doran.data.data.content;
      const datas = [];
      contents.map((content) => (
        datas.push({"id": content.id, "title": content.title, "category": content.category, "images": content.images})
      ));

      setDoranList(datas);

    } catch (error) {
      Alert.alert("API Error");
    } finally {
      
    }
  };

  useEffect(() => {
    getDoranList();
  }, []);

  useEffect(() => {
  }, [doranList]);

  return (
    <Container>
      <Header>
        <Title>도란도란</Title>
        <Image
          style={styles.search}
          source={SearchIcon}/>
      </Header>

      {/* 선택된 필터 */}
      <FilterLists/>
      <Padding/>

      <ScrollView>
        {/* 도란도란 글 리스트 */}
        <DoranList>
          {doranList.map((doran, idx) => (
            <DoranItem 
              key={idx}
              imgUri={doran.images}
              title={doran.title}
              categories={doran.category}/>
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

const Padding = styled.View`
  height: 10px;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 13px 21px 24px 23px;
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
  margin: 20px 22px 50px 22px;
`;


export default DoranHome;

/*
npm install --save styled-components
npm install --save prop-types
*/