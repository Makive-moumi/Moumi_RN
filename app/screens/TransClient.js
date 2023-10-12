// 번역 내역 상세 (사용자)
import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import BackBtn from "../assets/ic_back.png";

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const TransClient = ({route}) => {
  const [topInfo, setTopInfo] = useState();
  const getRequestDetail = async () => {
    try {
      const detail = await axios.get(
        BASEURL + `requests/${route.params.id}/client`
      );
      
      const request = detail.data.data.request;
      setTopInfo({"title": request.title, "image": request.image, "category": request.category});

    } catch (error) {
      Alert.alert("API Error");
    } finally {
      
    }
  };

  useEffect(() => {
    getRequestDetail()
  }, []);

  useEffect(() => {
  }, [topInfo]);

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.goBack('TransClient')}>
          <Image
            style={styles.back}
            source={BackBtn}/>
        </TouchableOpacity>
        <HeaderTitle>번역 상세</HeaderTitle>
      </Header>

      <TopContents>
        <Image
          style={styles.cover}
          source={{uri: topInfo.image}}
          resizeMode="cover"/>
        <TransInfo>
          <Title>{topInfo.title}</Title>
          <CategoryList>
            {topInfo.category != null ?
              topInfo.category.map((cate, idx) => (
                <CategoryTag key={idx} category={cate}/>
              ))
              : null
            }
          </CategoryList>        
        </TransInfo>
      </TopContents>

      <Line/>

    </Container>
  );
}
const styles = StyleSheet.create({
  back: {
    width: 8,
    height: 16,
    resizeMode: 'contain',
    padding: 2,
  },
  cover: {
    width: 100,
    height: 70,
    borderRadius: 20,
    marginLeft: 30,
  }
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
  margin: 16px 0px 38px 30px;
  align-items: center;
`;
// 번역 상세
const HeaderTitle = styled.Text`
  font-size: 18;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
  margin-left: 12px;
`;

const TopContents = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
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

const Line = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.line};
`;
export default TransClient;