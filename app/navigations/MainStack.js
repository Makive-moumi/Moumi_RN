import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DoranHome } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}  
    >
      <Stack.Screen name="Main" component={DoranHome} />
      {/*<Stack.Screen name="Doran" component={DoranHome}/>*/}
    </Stack.Navigator>
  );
};

export default MainStack;