// 마이페이지
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ProfileImg from "../assets/img_profile.png";
import Footer from '../components/Footer';

const MyPage = () => {
  const nickname = "내귀에화수분";
  const email = "asdf1234@naver.com";

  return(
    <Container>
      <ScrollView>

        <Header>
          <Title>마이페이지</Title>
        </Header>

        {/* 사용자 정보 */}
        <UserInfo>
          <Image
            style={styles.profile}
            source={ProfileImg}/>

          <UserText>
            <UserNickname>{nickname}</UserNickname>
            <UserEmail>{email}</UserEmail>
          </UserText>
        </UserInfo>

        {/* 번역 내역 */}

        {/* 기타 기능 */}
        
  
      </ScrollView>
      <Footer/>
    </Container>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: 70,
    height: 70,
  },
});

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 13px 21px 27px 23px;
`;
// 마이페이지
const Title = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
`;

// 사용자 정보
const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 24px 30px 23px;
`;
const UserText = styled.View`
  margin-top: 26px;
  margin-left: 20px;
  
`;
const UserNickname = styled.Text`
  font-size: 15;
  font-weight: 500;
  color: ${({ theme }) => theme.userName};
`;
const UserEmail = styled.Text`
  font-size: 12;
  font-weight: 400;
  color: ${({ theme }) => theme.userEmail};
  margin-top: 5px;
`;

export default MyPage;