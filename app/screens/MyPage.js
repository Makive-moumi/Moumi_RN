// 마이페이지
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styled from 'styled-components/native';

import ProfileImg from "../assets/img_profile.png";
import ArrowIcon from "../assets/ic_arrow.png";
import TransCover from "../assets/img_trans_cover.png";

import Footer from '../components/Footer';

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const MyPage = () => {
  const navigation = useNavigation();

  const [nickname, setNickname] = useState("사용자");
  const [email, setEmail] = useState("email@email.com");
  const demoData = [{"img": TransCover, "title": "뉴스 번역 해드립니다!"}, {"img": TransCover, "title": "뉴스 번역 해드립니다!"},
    {"img": TransCover, "title": "뉴스 번역 해드립니다!"}, {"img": TransCover, "title": "뉴스 번역 해드립니다!"}];

  // 사용자 정보 get
  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(
        BASEURL + `/clients/1`
      );
      
      setNickname(userInfo.data.data.client.name);
      setEmail(userInfo.data.data.client.email);

    } catch (error) {
      Alert.alert("API Error");
    } finally {
      
    }
  };

  // 번역 내역 get
  const getRequests = async () => {
    try {
      const body = {
        category: null,
        hasReview: false
      };

      const requests = await axios.get(
        BASEURL + `/requests`, {
          
          params: {
            page: 0
          },
          data: body
        }
      );
      
      console.log(requests.data);

    } catch (error) {
      Alert.alert("API Error");
    } finally {
      
    }
  }

  useEffect(() => {
    getUserInfo();
    {/*getRequests();*/}
  }, []);

  useEffect(() => {
  }, [nickname, email]);

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
            <TouchableOpacity 
              style={styles.arrowBtn}
              onPress={() => navigation.navigate('TransHome')}>
              <Image
                style={styles.arrow}
                source={ArrowIcon}/>
            </TouchableOpacity>
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

        <Line/>

        {/* 기타 기능 */}
        <SettingContainer>
          <SettingBtn>
            <SettingText>즐겨찾기</SettingText>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </SettingBtn>

          <SettingBtn>
            <SettingText>문의하기</SettingText>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </SettingBtn>

          <SettingBtn>
            <SettingText>개인정보 제공동의</SettingText>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </SettingBtn>

          <SettingBtn>
            <SettingText>로그아웃</SettingText>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </SettingBtn>

          <SettingBtn>
            <SettingText>탈퇴하기</SettingText>
            <Image
              style={styles.arrow}
              source={ArrowIcon}/>
          </SettingBtn>
        </SettingContainer>
  
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
  arrowBtn: {
    marginLeft: 'auto',
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
  align-self: flex-end;
  margin-bottom: 9px;
  border: 1px solid ${({ theme }) => theme.userEdit};
  border-radius: 20px;
`;
const UserEditText = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${({ theme }) => theme.userEdit};
  padding: 8px 11px;
`;

// 번역 내역
const TransContainer = styled.View`
  margin: 27px 0px 34px 0px;
`;
const TransHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
  margin-left: 23px;
`;
const TransHeaderTitle = styled.Text`
  font-size: 15;
  font-weight: 600;
  color: ${({ theme }) => theme.transTitle};
`;
// 번역 내역 아이템
const TransList = styled.View`
  flex-direction: row;
  margin-left: 23px;
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

// 기타 기능 버튼들
const SettingContainer = styled.View`
  margin: 42px 0px 10px 29px;
`;
const SettingBtn = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;
`;
const SettingText = styled.Text`
  font-size: 15;
  font-weight: 400;
  color: ${({ theme }) => theme.SettingBtn};
`;

export default MyPage;