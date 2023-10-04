// 모우미(번역 신청) 상세 > 의뢰인 후기
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Review = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text> 리뷰창 </Text>
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
export default Review;