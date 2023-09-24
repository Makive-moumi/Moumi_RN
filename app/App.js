import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

import Explanation from './screens/Explanation';
import Review from './screens/Review';
import Info from './screens/Info';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text> 상단 화면입니다. </Text>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Explanation" component={Explanation} />
          <Tab.Screen name="Review" component={Review} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});