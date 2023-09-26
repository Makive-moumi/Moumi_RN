// 선택된 필터
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
//import PropTypes from 'prop-types';

const SelectedFilters = () => {
  return (
    <Container>
      <Text>test</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #F3F6F6;
  border-radius: 20px;
  width: 100%;
  padding: 10px 14px;
`;

export default SelectedFilters;