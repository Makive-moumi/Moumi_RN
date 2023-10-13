// 모우미(번역 신청) 상세 > 의뢰인 후기
import React from 'react';
import styled from 'styled-components';
import { ScrollView, Text } from 'react-native';

import transExplan from '../../assets/img_transExplan.png';
import quotationMarks from '../../assets/ic_quotation_marks.png';
import ReviewItem from '../../components/ReviewItem';

const ReviewInfo = [
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      score: 5.0,
      date: '2023.08.26',
      content: '빠르고 쉽고 정확하게 해주셨어요! 앞으로도 이분께 맡길 예정입니다.',
  },
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      score: 5.0,
      date: '2023.08.26',
      content: '빠르고 쉽고 정확하게 해주셨어요! 앞으로도 이분께 맡길 예정입니다.',
  },
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      score: 5.0,
      date: '2023.08.26',
      content: '빠르고 쉽고 정확하게 해주셨어요! 앞으로도 이분께 맡길 예정입니다.',
  },
];

const Review = ({ route, navigation }) => {
  return (
    <ScrollView 
      style={{ backgroundColor: 'white'}}>
      <Top>
        <SubTitle> 이 번역가님의 특징은 이렇게 나와요 :{')'} </SubTitle>
        <SmallExplan> 번역가에게 의뢰를 맡긴 분들의 후기를 바탕으로 선택된 키워드예요 </SmallExplan>
        <FeatureField>
          <QmImg source={quotationMarks} />
          <FeatureSubTitle> 빠르고 이해하기 쉽게 번역해줘요! </FeatureSubTitle>
          <KeywordEx source={transExplan}/>
        </FeatureField>
      </Top>
      <ReviewTop>
        <ReviewTitle> 후기 {''} 3 </ReviewTitle>
        <FilterBtn>
          <FilterBtnText> 필터 </FilterBtnText>
        </FilterBtn>
      </ReviewTop>
      <Line/> 
      <ReviewList>
        {ReviewInfo.map((item, idx) => (
          <ReviewItem 
            key={idx}
            writer={item.writer}
            id={item.id}
            score={item.score}
            date={item.date}
            content={item.content}
          />
        ))}
      </ReviewList>
    </ScrollView>
  );
}

const Top = styled.View`
  padding: 40px 25px 30px 25px;
`;
const SubTitle = styled.Text`
  color: #3A3C3B;
  font-size: 12px;
  font-weight: 500;
`;
const QmImg = styled.Image`
  width: 28px;
  height: 28px;
  bottom: 3px;
`;
const SmallExplan = styled.Text`
  margin-top: 10px;
  color: #666666;
  font-size: 9px;
  font-weight: 300;
`;
const FeatureField = styled.View`
  align-items: center;
  border-width: 1px;
  border-color: #D9D9D9;
  border-radius: 15px;
  margin-top: 30;
  padding: 18px 20px 30px 20px;
`;
const KeywordEx = styled.Image`
  width: 290px;
  height: 85px;
`;
const ReviewTop = styled.View`
  display: flex;
  flex-direction: row;
`;
const FilterBtn = styled.TouchableOpacity`
  padding: 10px 14px;
  background-color: #F3F6F6;
  border-radius: 20px;
  margin-left: 16px;
  margin-bottom: 15px;
`;
const FilterBtnText = styled.Text`
  font-size: 9px;
  font-weight: 400;
  color: #728F89;
`;
const ReviewTitle = styled.Text`
  margin-left: 30px;
  margin-top: 5px;
  color: #3A3C3B;
  font-size: 14px;
  font-weight: 300;
`;
const Reviewing = styled.Image`
  width: 100px;
  height: 25px;
  margin-top: 30px;
  margin-left: 110px;
`;
const FeatureSubTitle = styled.Text`
  margin-bottom: 31px;
  color: #3A3C3B;
  font-size: 12px;
  font-weight: 500;
`;
const Line = styled.View`
  height: 0.5px;
  background-color: #D9D9D9;
`;
const ReviewList = styled.View`
  margin: 32px 30px 0 32px;
`;
export default Review;