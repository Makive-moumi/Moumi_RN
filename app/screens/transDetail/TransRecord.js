// 모우미(번역 신청) 상세 > 통역 내역
import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import TransRecordItem from '../../components/TransRecordItem';

import profileImg from '../../assets/img_profile.png';
import ExplanationImg from '../../assets/ic_TransExplanation.png';

const RecordInfo = [
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      date: '2023.08.26',
      content: '합판? 접목성? 나무로 집꾸미는 방법',
  },
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      date: '2023.08.26',
      content: '합판? 접목성? 나무로 집꾸미는 방법',
  },
  {
      writer: '내귀에캔디',
      id: 'asdf1234',
      date: '2023.08.26',
      content: '합판? 접목성? 나무로 집꾸미는 방법',
  },
];

const TransRecord = ({ route, navigation }) => {
  return (
    <ScrollView 
      style={{ backgroundColor: 'white' }}>
      <RecordTop>
        <RecordTitle> 통역 내역 {''} 3 </RecordTitle>
        <FilterBtn>
          <FilterBtnText> 필터 </FilterBtnText>
        </FilterBtn>
      </RecordTop>
      <Line/> 
      <RecordList>
        {RecordInfo.map((item, idx) => (
          <TransRecordItem 
            key={idx}
            writer={item.writer}
            id={item.id}
            date={item.date}
            content={item.content}
          />
        ))}
      </RecordList>
      <TransIntro>
        <Profile source={profileImg}/>
        <TransSubIntro>
          <ProfileName> 번역가 이영연 입니다! </ProfileName>
          <ProfileSub> 빠르고 신속하게 도와드리겠습니다. </ProfileSub>
        </TransSubIntro>
      </TransIntro>
      <Explan>
        <ExplanImg source={ExplanationImg}/>
        <Explanation> 
          본 페이지는 신청 페이지로 신청 후 번역가의 사정으로 거절될 수 있습니다
        </Explanation>
      </Explan>
      <ReservBtn>
        <ReservBtnText> 번역 예약하기 </ReservBtnText>
      </ReservBtn>
    </ScrollView>
  );
}

const RecordTop = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 38px;
`;
const RecordTitle = styled.Text`
  margin-left: 30px;
  margin-top: 5px;
  color: #3A3C3B;
  font-size: 14px;
  font-weight: 300;
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
const Line = styled.View`
  height: 0.5px;
  background-color: #D9D9D9;
`;
const RecordList = styled.View`
  margin: 32px 0 0 30px;
`;
const TransIntro = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 31px;
`;
const TransSubIntro = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Profile = styled.Image`
  width: 70px;
  height: 70px;
`;
const ProfileName = styled.Text`
  color: #231F20;
  font-size: 15px;
  font-weight: 500;
`;
const ProfileSub = styled.Text`
  margin-top: 5px;
  color: #3A3C3B;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
const Explan = styled.View`
  display: flex;
  flex-direction: row;
  margin: 22px 32px 31px 32px;
`;
const ExplanImg = styled.Image`
  width: 12px;
  height: 12px;
`;
const Explanation = styled.Text`
  color: #666666;
  font-size: 8px;
  font-weight: 275;
  margin-right: 4px;
  margin-left: 4px;
`;
const ReservBtn = styled.TouchableOpacity`
  margin: 10px 30px;
  padding: 7px 114px;
  border-radius: 5px;
  border: 1px solid #159A7F;
  background: #159A7F;
`;
const ReservBtnText = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px; /* 216.667% */
`;
export default TransRecord;