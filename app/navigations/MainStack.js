import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransDetail, DoranHome, MyPage } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  // 임시로 모우미 세부 페이지를 메인으로 해둠. 모우미 메인 만들면 initialRouteName 부분 바꿀 것
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{ headerShown: false }}  
    >
      {/*<Stack.Screen name="Main" component={Main} />*/}
      <Stack.Screen name="TransDetail" component={TransDetail}/>
      <Stack.Screen name="Doran" component={DoranHome}/>
      <Stack.Screen name="MyPage" component={MyPage}/>
    </Stack.Navigator>
  );
};

export default MainStack;