// 도란도란 상세
import React from 'react';
import { StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";

import CloseBtn from "../assets/ic_doran_close.png";

const DoranDetail = ({ route }) => {
  const navigation = useNavigation();

  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#111111"/>
      
      <TouchableOpacity
        onPress={() => navigation.goBack('DoranDetail')}>
        <Image
          style={styles.close}
          source={CloseBtn}/>
      </TouchableOpacity>

      <Cards>
        <SliderBox
          images={route.params.images}
          sliderBoxHeight={400}
          onCurrentImagePressed={index => null}/>
      </Cards>

    </Container>
  );
}

const styles = StyleSheet.create({
  close: {
    width: 14,
    height: 14,
    padding: 2,
    marginLeft: 25,
    marginTop: 16,
  }
});

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.doranBack};
  align-items: start;
  justify-content: flex-start;
`;

const Cards = styled.View`
  margin-top: 130px;
`;

export default DoranDetail;