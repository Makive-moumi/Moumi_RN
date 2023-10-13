// 카테고리 태그
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const CategoryTag = ({ category }) => {
  return(
    <Container>
      <CategoryText>{category}</CategoryText>
    </Container>
  );
}

CategoryTag.propTypes = {
  category: PropTypes.string,
};

const Container = styled.View`
  padding: 4px 19px;
  background-color: ${({ theme }) => theme.categoryBack};
  border-radius: 20px;
  margin-right: 6px;
`;
const CategoryText = styled.Text`
  font-size: 9;
  color: ${({ theme }) => theme.text};
`;

export default CategoryTag;