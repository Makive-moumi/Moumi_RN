// 선택된 필터
import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
//import PropTypes from 'prop-types';
import DeleteIcon from '../assets/ic_delete_filter.png';

const FilterLists = () => {
  return (
    <Container>
      <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
        <FilterBtn>
          <FilterBtnText>필터</FilterBtnText>
        </FilterBtn>

        <Filter>
          <FilterText>최신순</FilterText>
          <Image
            style={styles.filter}
            source={DeleteIcon}/>
        </Filter>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  filter: {
    width: 9,
    height: 9,
    marginLeft: 12,
    alignSelf: 'center',
  },
});


const Container = styled.View`
  flex-direction: row;
  margin-left: 15px;
`;

// 필터 버튼
const FilterBtn = styled.TouchableOpacity`
  padding: 10px 14px;
  background-color: ${({ theme }) => theme.filterBtn};
  border-radius: 20px;
  margin-right: 12px;
`;
const FilterBtnText = styled.Text`
  font-size: 9;
  color: ${({ theme }) => theme.filterBtnText};
`;

// 선택된 필터
const Filter = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 12px 10px 14px;
  background-color: ${({ theme }) => theme.filterBack};
  border-radius: 20px;
  margin-right: 12px;
`;
const FilterText = styled.Text`
  font-size: 9;
  color: ${({ theme }) => theme.filterText};
`;


export default FilterLists;