import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, DoranHome, MyPage, TransHome, TransDetail, DoranDetail } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}  
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Doran" component={DoranHome}/>
      <Stack.Screen name="DoranDetail" component={DoranDetail}/>
      <Stack.Screen name="MyPage" component={MyPage}/>
      <Stack.Screen name="TransHome" component={TransHome}/>
      <Stack.Screen name="TransDetail" component={TransDetail}/>
    </Stack.Navigator>
  );
};

export default MainStack;