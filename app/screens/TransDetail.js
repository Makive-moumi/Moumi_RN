// 모우미(번역 신청) 상세
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Explanation from './transDetail/Explanation';
import Review from './transDetail/Review';
import Info from './transDetail/Info';

import DetailImg from '../assets/img_detail.png';

const Tab = createMaterialTopTabNavigator();

const TransDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.subImg} source={DetailImg}/>
      <NavigationContainer independent={true}>
      <Tab.Navigator 
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 12
            },
            tabBarStyle: {
              borderBottomWidth: 0.2,
              borderColor: '#D9D9D9'
            },
            tabBarInactiveTintColor: '#AEAEAE', // 선택 안한 탭 글자 색
            tabBarActiveTintColor: '#231F20',   // 선택한 탭 글자 색  
            tabBarIndicatorStyle: {             // 선택한 탭을 알려주는 표시선 색, 두께
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
              width: 58,
              left: '9.1%',
            },
          }}
        >

          <Tab.Screen name="번역가홈"> 
            {(props) => <Explanation {...props}/>} 
          </Tab.Screen>
          <Tab.Screen name="의뢰인후기">
            {(props) => <Review {...props}/>} 
          </Tab.Screen>
          <Tab.Screen name="통역내역">
            {(props) => <Info {...props}/>} 
          </Tab.Screen>
          
        </Tab.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'    // 상단 상태바 색상 변경 (SafeAreaView로 해야함!)
  },

  subImg: {
    width: '100%',
    height: 220,
  },
});

export default TransDetail;