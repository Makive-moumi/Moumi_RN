// 마이페이지
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import ProfileImg from "../assets/img_profile.png";
import ArrowIcon from "../assets/ic_arrow.png";
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

          <UserEditBtn>
            <UserEditText>수정</UserEditText>
          </UserEditBtn>
        </UserInfo>

        <Line/>

        {/* 번역 내역 */}
        <TransList>
          <TransHeader>
            <TransTitle>번역 내역</TransTitle>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </TransHeader>
          
        </TransList>

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
  arrow: {
    width: 7,
    height: 14,
    marginLeft: 'auto',
  }
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

const Line = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.line};
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
  margin: 0px 24px 30px 23px;
`;
const UserText = styled.View`
  margin-left: 20px;
  justify-content: flex-end;
`;
const UserNickname = styled.Text`
  font-size: 15;
  font-weight: 500;
  color: ${({ theme }) => theme.userName};
  margin-bottom: 5px;
`;
const UserEmail = styled.Text`
  font-size: 12;
  font-weight: 400;
  color: ${({ theme }) => theme.userEmail};
  margin-bottom: 5px;
`;
const UserEditBtn = styled.View`
  margin-left: auto;
  justify-content: flex-end;
  margin-bottom: 9px;
`;
const UserEditText = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${({ theme }) => theme.userEdit};
  padding: 8px 11px;
  border: 1px solid ${({ theme }) => theme.userEdit};
  border-radius: 20px;
`;

// 번역 내역
const TransList = styled.View`
  margin: 27px 24px 34px 23px;
`;
const TransHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;
const TransTitle = styled.Text`
  font-size: 15;
  font-weight: 600;
  color: ${({ theme }) => theme.transTitle};
`;

export default MyPage;