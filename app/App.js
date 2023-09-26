import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

import Explanation from './screens/Explanation';
import Review from './screens/Review';
import Info from './screens/Info';

import DetailImg from './assets/DetailImg.png';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.subImg} source={DetailImg}/>
      <NavigationContainer>
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
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'    // 상단 상태바 색상 변경 (SafeAreaView로 해야함!)
  },

  subImg: {
    width: 400,
    height: 220,
  },
});