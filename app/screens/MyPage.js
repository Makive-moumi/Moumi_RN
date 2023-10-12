// 마이페이지
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import ProfileImg from "../assets/img_profile.png";
import ArrowIcon from "../assets/ic_arrow.png";
import TransCover from "../assets/img_trans_cover.png";

import Footer from '../components/Footer';

const MyPage = () => {
  const nickname = "내귀에화수분";
  const email = "asdf1234@naver.com";
  const demoData = [{"img": TransCover, "title": "뉴스 번역 해드립니다!"}, {"img": TransCover, "title": "뉴스 번역 해드립니다!"},
    {"img": TransCover, "title": "뉴스 번역 해드립니다!"}, {"img": TransCover, "title": "뉴스 번역 해드립니다!"}];

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
        <TransContainer>
          <TransHeader>
            <TransHeaderTitle>번역 내역</TransHeaderTitle>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </TransHeader>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TransList>
              {demoData.map((demo, idx) => (
                <TransItem
                  key={idx}>
                  <Image
                    style={styles.transCover}
                    source={demo.img}/>
                  <TransItemTitle>{demo.title}</TransItemTitle>
                </TransItem>
              ))}
            </TransList>
          </ScrollView>
          
        </TransContainer>

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
    resizeMode: 'contain',
  },
  arrow: {
    width: 7,
    height: 14,
    marginLeft: 'auto',
    marginRight: 24,
    resizeMode: 'contain',
  },
  transCover: {
    width: 145,
    height: 111,
    borderRadius: 15,
    resizeMode: 'contain',
  },
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
const TransContainer = styled.View`
  margin: 27px 0px 34px 23px;
`;
const TransHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;
const TransHeaderTitle = styled.Text`
  font-size: 15;
  font-weight: 600;
  color: ${({ theme }) => theme.transTitle};
`;
// 번역 내역 아이템
const TransList = styled.View`
  flex-direction: row;
`;
const TransItem = styled.View`
  margin-right: 20px;
`;
const TransItemTitle = styled.Text`
  font-size: 14;
  font-weight: 400;
  color: ${({ theme }) => theme.transTitle};
  margin-left: 6px;
  margin-top: 18px;
`;

export default MyPage;