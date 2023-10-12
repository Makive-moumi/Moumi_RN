// 스플래시
import React, { useEffect } from 'react';
import { StatusBar, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/img_splash_logo.png";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{ navigation.navigate('Main') }, 2000);
  });

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#159A7F"/>

      <Image
        style={styles.logo}
        source={Logo}/>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 284,
    height: 198,
    marginBottom: 50,
  }
});

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.mainColor};
  align-items: center;
  justify-content: center;
`;

export default Splash;