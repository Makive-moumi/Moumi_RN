// 도란도란 메인
import React from 'react';
import { StatusBar, StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
//import SearchIcon from '../assets/ic_search.png';
//import SelectedFilters from 'components/SelectedFilters';

const DoranHome = () => {
  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#ffffff"/>

      <Header>
        <Title>도란도란</Title>
        {/*<Image
          style={styles.search}
  source={SearchIcon}/>*/}
      </Header>

      <Filters>
        
      </Filters>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  search: {
    width: 22,
    height: 22,
    marginLeft: 'auto',
  },
});

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: start;
  justify-content: flex-start;
`;

// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 13px 21px 28px 23px;
`;
// 도란도란
const Title = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
`;

// 선택된 필터
const Filters = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;

export default DoranHome;

/*
npm install --save styled-components
npm install --save prop-types
*/