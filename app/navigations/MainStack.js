import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, DoranHome, MyPage, TransHome, TransDetail, DoranDetail, Splash, TransClient, NoneReview, HasReview } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}  
    >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TransDetail" component={TransDetail}/>
      <Stack.Screen name="Doran" component={DoranHome}/>
      <Stack.Screen name="DoranDetail" component={DoranDetail}/>
      <Stack.Screen name="MyPage" component={MyPage}/>
      <Stack.Screen name="TransHome" component={TransHome}/>
      <Stack.Screen name="NoneReview" component={NoneReview}/>
      <Stack.Screen name="HasReview" component={HasReview}/>
      <Stack.Screen name="TransClient" component={TransClient}/>
    </Stack.Navigator>
  );
};

export default MainStack;