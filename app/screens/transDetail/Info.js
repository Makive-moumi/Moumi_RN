// 모우미(번역 신청) 상세 > 통역 내역
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Info = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text> 번역가 정보 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Info;