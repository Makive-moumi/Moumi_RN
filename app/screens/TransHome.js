// 번역내역 메인: 번역 내역 리스트
import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BackBtn from "../assets/ic_back.png";

import { FilterLists } from '../components';
import NoneReview from './transHome/NoneReview';
import HasReview from './transHome/HasReview';

const TransHome = () => {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

  const movePage = (id) => {
    navigation.navigate('TransClient', {id: id} );
    console.log(id);
  };  

  return(
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.goBack('TransHome')}>
          <Image
            style={styles.back}
            source={BackBtn}/>
        </TouchableOpacity>
        <Title>번역 내역</Title>
      </Header>

      {/* 선택된 필터 */}
      <FilterLists/>
      <Padding/>

      <NavigationContainer
        independent={true}>
        <Tab.Navigator 
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 500,
            },
            tabBarInactiveTintColor: '#666666', // 선택 안 한 탭 글자 색
            tabBarActiveTintColor: '#3A3C3B',   // 선택한 탭 글자 색  
            tabBarInactiveTintColor: '#000000',
            tabBarIndicatorStyle: {             // 선택한 탭을 알려주는 표시선 색, 두께
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
              width: '50%',
            },
          }}
        >

          <Tab.Screen name="후기쓰기" component={({ navigation }) => (
            <NoneReview
              movePage={movePage}
              navigation={navigation}
            />
          )}/>
          <Tab.Screen name="작성된 후기" component={({ navigation }) => (
            <HasReview
              movePage={movePage}
              navigation={navigation}
            />
          )}/>
          
        </Tab.Navigator>
      </NavigationContainer>
      
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
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

const Padding = styled.View`
  height: 21px;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 16px 0px 30px 30px;
  align-items: center;
`;
// 번역 내역
const Title = styled.Text`
  font-size: 18;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
  margin-left: 12px;
`;

export default TransHome;